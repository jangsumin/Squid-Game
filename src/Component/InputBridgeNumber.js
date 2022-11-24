function InputBridgeNumber() {
  return (
    <form>
      <label>
        다리 길이 입력!
        <input type="text" name="numberOfBridges" placeHolder="5에서 10까지의 숫자를 입력하고"/>
      </label>
      <input type="submit" value="눌러!" />
    </form>
  );
}

export default InputBridgeNumber;