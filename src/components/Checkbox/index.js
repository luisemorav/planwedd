const CheckBoxD = ({ label }) => {
  return (
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="chkB" />
      <label class="form-check-label" for="chkB">
        {label}
      </label>
    </div>
  );
};

export default CheckBoxD;
