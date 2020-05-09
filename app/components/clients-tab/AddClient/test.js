import PhoneInput from 'react-phone-number-input/input';

function test() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState();
  // If `country` property is not passed
  // then "International" format is used.
  return <PhoneInput country="US" value={value} onChange={setValue} />;
}
