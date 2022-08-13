const CheckBoxD = ({ label }) => {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="chkB" />
      <label className="form-check-label" for="chkB">
        {label}
      </label>
    </div>
  );
};

export default CheckBoxD;
