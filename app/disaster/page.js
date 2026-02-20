export default function DisasterSelectionPage() {
  return (
    <div>
      <h1>Disaster Selection</h1>

      <div className="form-group">
        <label>Select Location</label>
        <select>
          <option>Choose a location</option>
          <option>City</option>
          <option>Barangay</option>
        </select>
      </div>

      <div className="form-group">
        <label>Select Disaster Type</label>
        <select>
          <option>Choose a disaster</option>
          <option>Flood</option>
          <option>Earthquake</option>
          <option>Typhoon</option>
        </select>
      </div>

      <button>Continue</button>
    </div>
  );
}