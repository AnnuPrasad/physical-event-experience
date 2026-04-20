import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// ─── JLN Stadium center coordinates ───
const JLN_CENTER = [28.5826, 77.2348];
const DEFAULT_ZOOM = 17;

// ─── Custom icon factory ───
const createIcon = (emoji, size = 32) => {
  return L.divIcon({
    html: `<div style="
      font-size: ${size}px;
      line-height: 1;
      text-align: center;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
    ">${emoji}</div>`,
    className: 'custom-marker',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
};

// ─── Facility marker data for JLN Stadium ───
const FACILITIES = {
  toilets: {
    label: 'Washrooms',
    emoji: '🚻',
    color: '#6366f1',
    markers: [
      { position: [28.5835, 77.2338], name: 'Washroom — North Block', desc: 'Near Gate 1, Ground Floor' },
      { position: [28.5818, 77.2358], name: 'Washroom — East Stand', desc: 'Level 1, East Concourse' },
      { position: [28.5816, 77.2335], name: 'Washroom — South Block', desc: 'Near Gate 3, Ground Floor' },
      { position: [28.5830, 77.2362], name: 'Washroom — VIP Area', desc: 'Premium Level, West Wing' },
    ],
  },
  food: {
    label: 'Food & Drinks',
    emoji: '🍔',
    color: '#f59e0b',
    markers: [
      { position: [28.5832, 77.2342], name: 'Eagle Eye Tacos', desc: 'Mexican Street Food • Wait: ~4 min' },
      { position: [28.5822, 77.2355], name: 'Dilli Bites', desc: 'Chaat & Indian Snacks • Wait: ~6 min' },
      { position: [28.5820, 77.2340], name: 'Hydration Bar', desc: 'Drinks & Smoothies • Wait: ~2 min' },
      { position: [28.5828, 77.2360], name: 'Pizza Junction', desc: 'Pizza & Burgers • Wait: ~8 min' },
      { position: [28.5835, 77.2352], name: 'Chai Point', desc: 'Tea & Coffee • Wait: ~3 min' },
    ],
  },
  stage: {
    label: 'Stage / Concert',
    emoji: '🎤',
    color: '#ef4444',
    markers: [
      { position: [28.5826, 77.2348], name: 'Main Stage', desc: 'Central Performance Area — LIVE NOW' },
      { position: [28.5830, 77.2348], name: 'DJ Booth', desc: 'North side of main stage' },
    ],
  },
  medical: {
    label: 'Medical Aid',
    emoji: '🏥',
    color: '#10b981',
    markers: [
      { position: [28.5833, 77.2345], name: 'First Aid — North', desc: 'Staffed 24/7 • Gate 1 area' },
      { position: [28.5819, 77.2350], name: 'First Aid — South', desc: 'Staffed 24/7 • Gate 3 area' },
    ],
  },
  gates: {
    label: 'Entry Gates',
    emoji: '🚪',
    color: '#3b82f6',
    markers: [
      { position: [28.5838, 77.2348], name: 'Gate 1 — North', desc: 'Main Entry • Currently: Low Traffic ✅' },
      { position: [28.5826, 77.2365], name: 'Gate 2 — East', desc: 'Secondary Entry • Currently: Moderate ⚠️' },
      { position: [28.5814, 77.2348], name: 'Gate 3 — South', desc: 'South Entry • Currently: High Traffic 🔴' },
      { position: [28.5826, 77.2330], name: 'Gate 4 — West', desc: 'VIP / Staff Entry • Currently: Low Traffic ✅' },
    ],
  },
  parking: {
    label: 'Parking',
    emoji: '🅿️',
    color: '#0ea5e9',
    markers: [
      { position: [28.5842, 77.2340], name: 'Parking Lot A — North', desc: 'Open Air • 420 spots • 65% Full' },
      { position: [28.5810, 77.2355], name: 'Parking Lot B — South East', desc: 'Covered Multi-level • 800 spots • 40% Full' },
      { position: [28.5820, 77.2325], name: 'Parking Lot C — West', desc: 'VIP/Premium Parking • 120 spots • 80% Full' },
    ],
  },
};

// ─── Map event handler for scenario overlays ───
const ScenarioOverlays = ({ activeScenarios }) => {
  const map = useMap();

  return (
    <>
      {/* Emergency evacuation overlay */}
      {activeScenarios.emergency && (
        <Circle
          center={JLN_CENTER}
          radius={200}
          pathOptions={{
            color: '#ef4444',
            fillColor: '#ef4444',
            fillOpacity: 0.15,
            weight: 3,
            dashArray: '10 5',
          }}
        />
      )}

      {/* Congestion heatmap zones */}
      {activeScenarios.congestion && (
        <>
          <Circle
            center={[28.5835, 77.2348]}
            radius={40}
            pathOptions={{ color: '#f59e0b', fillColor: '#f59e0b', fillOpacity: 0.35, weight: 2 }}
          />
          <Circle
            center={[28.5820, 77.2355]}
            radius={55}
            pathOptions={{ color: '#ef4444', fillColor: '#ef4444', fillOpacity: 0.3, weight: 2 }}
          />
          <Circle
            center={[28.5826, 77.2333]}
            radius={30}
            pathOptions={{ color: '#10b981', fillColor: '#10b981', fillOpacity: 0.25, weight: 2 }}
          />
        </>
      )}

      {/* Demographics overlay */}
      {activeScenarios.demographics && (
        <>
          <Circle
            center={[28.5832, 77.2340]}
            radius={50}
            pathOptions={{ color: '#6366f1', fillColor: '#6366f1', fillOpacity: 0.2, weight: 2 }}
          />
          <Circle
            center={[28.5820, 77.2355]}
            radius={45}
            pathOptions={{ color: '#8b5cf6', fillColor: '#8b5cf6', fillOpacity: 0.2, weight: 2 }}
          />
        </>
      )}

      {/* Medical emergency pulse */}
      {activeScenarios.medical && (
        <Circle
          center={[28.5822, 77.2352]}
          radius={25}
          pathOptions={{
            color: '#ef4444',
            fillColor: '#ef4444',
            fillOpacity: 0.4,
            weight: 3,
          }}
        />
      )}
    </>
  );
};

const StadiumMap = ({ activeScenarios = {}, defaultLayers, showScenarios = true }) => {
  const [visibleLayers, setVisibleLayers] = useState(defaultLayers || {
    toilets: true,
    food: true,
    stage: true,
    medical: true,
    gates: true,
    parking: true,
  });

  const toggleLayer = (key) => {
    setVisibleLayers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      {/* Map */}
      <MapContainer
        center={JLN_CENTER}
        zoom={DEFAULT_ZOOM}
        style={{ height: '100%', width: '100%', borderRadius: 'var(--radius-lg)' }}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {/* Scenario overlays (organizer only) */}
        {showScenarios && <ScenarioOverlays activeScenarios={activeScenarios} />}

        {/* Facility markers */}
        {Object.entries(FACILITIES).map(([key, facility]) =>
          visibleLayers[key]
            ? facility.markers.map((marker, idx) => (
                <Marker
                  key={`${key}-${idx}`}
                  position={marker.position}
                  icon={createIcon(facility.emoji, key === 'stage' ? 36 : 28)}
                >
                  <Popup>
                    <div style={{ fontFamily: 'Inter, sans-serif', minWidth: '180px' }}>
                      <div
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: '800',
                          color: facility.color,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginBottom: '4px',
                        }}
                      >
                        {facility.label}
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#1e293b', marginBottom: '4px' }}>
                        {marker.name}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{marker.desc}</div>
                    </div>
                  </Popup>
                </Marker>
              ))
            : null
        )}
      </MapContainer>

      {/* Emergency Evacuation Banner */}
      {activeScenarios.emergency && (
        <div
          className="fade-in"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(12px)',
            padding: '24px 48px',
            borderRadius: 'var(--radius-lg)',
            border: '3px solid var(--danger)',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(239,68,68,0.3)',
          }}
        >
          <h2 style={{ color: 'var(--danger)', fontWeight: '900', letterSpacing: '4px', fontSize: '1.25rem' }}>
            ⚠️ EVACUATION PROTOCOL
          </h2>
          <p style={{ fontSize: '0.875rem', fontWeight: '600', marginTop: '8px', color: '#1e293b' }}>
            FOLLOW GUIDED SIGNAGE TO NEAREST EXIT
          </p>
        </div>
      )}

      {/* Layer Filter Controls */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          zIndex: 1000,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(16px)',
          borderRadius: 'var(--radius-md)',
          padding: '14px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          border: '1px solid rgba(0,0,0,0.06)',
          minWidth: '170px',
        }}
      >
        <div
          style={{
            fontSize: '0.65rem',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#64748b',
            marginBottom: '10px',
          }}
        >
          Map Layers
        </div>
        {Object.entries(FACILITIES).map(([key, facility]) => (
          <label
            key={key}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 4px',
              cursor: 'pointer',
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontWeight: '600',
              color: visibleLayers[key] ? '#1e293b' : '#94a3b8',
              transition: 'all 0.2s',
            }}
          >
            <input
              type="checkbox"
              checked={visibleLayers[key]}
              onChange={() => toggleLayer(key)}
              style={{ accentColor: facility.color, width: '14px', height: '14px' }}
            />
            <span style={{ fontSize: '1rem' }}>{facility.emoji}</span>
            {facility.label}
          </label>
        ))}
      </div>

      {/* Map Attribution */}
      <div
        style={{
          position: 'absolute',
          bottom: '8px',
          left: '8px',
          zIndex: 1000,
          background: 'rgba(255,255,255,0.8)',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '0.55rem',
          color: '#64748b',
        }}
      >
        📍 Jawaharlal Nehru Stadium, New Delhi • © OpenStreetMap
      </div>

      {/* Live indicator */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          zIndex: 1000,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(16px)',
          borderRadius: 'var(--radius-xl)',
          padding: '8px 16px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          border: '1px solid rgba(0,0,0,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 8px #10b981',
            animation: 'pulse 2s infinite',
          }}
        />
        <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#1e293b' }}>LIVE MAP</span>
      </div>
    </div>
  );
};

export default StadiumMap;
