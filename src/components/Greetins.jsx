function Greetings(props) {
  let greetings = "";
  if (props.lang === "de") {
    greetings = "Hallo";
  } else if (props.lang === "fr") {
    greetings = "Bonjour";
  } else if (props.lang === "en") {
    greetings = "Hello";
  } else if (props.lang === "es") {
    greetings = "Hola";
  }
  return (
    <h3 id="greetings">
      {greetings} {props.children}
    </h3>
  );
}
export default Greetings;