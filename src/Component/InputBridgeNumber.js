function InputBridgeNumber() {
  return (
    <form class="input-form">
      <label>
        <input class="input-txt" type="text" name="numberOfBridges" placeholder="5에서 8까지의 숫자를 입력하고"/>
      </label>
      <input class="input-btn" type="submit" value="눌러!" />
    </form>
  );
}

export default InputBridgeNumber;