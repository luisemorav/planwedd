const Option = ({ label }) => {
    
  return (
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="opt"
      />
      <label class="form-check-label" for="opt">
        {label}
      </label>
    </div>
  );
};

export default Option;
