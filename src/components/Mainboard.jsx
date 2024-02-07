export default function Mainboard() {
  return (
    <section id="mainBoard">
      <div className="secondBoard" id="notStarted">
        <p>Not Started</p>
      </div>
      <div className="secondBoard" id="planning">
        {" "}
        <p>Planning</p>
      </div>
      <div className="secondBoard" id="building">
        <p>Building</p>
      </div>
      <div className="secondBoard" id="review">
        <p>Review</p>
      </div>
    </section>
  );
}
