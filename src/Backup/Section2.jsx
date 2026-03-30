
import Card from "./Component/Card";

function Section2(){
    return(
    <div className="section2">

      <Card 
          icon="fa-solid fa-house fa-2x"
          title ="Property Loan"
          description="Unlock your property’s value today, repay comfortably over time."
          />

      <Card
          icon="fa-solid fa-car fa-2x"
          title="Car Loan"
          description="Drive now, pay later — that’s the power of a car loan."
          />
          
      <Card
          icon="fa-solid fa-motorcycle fa-2x"
          title="Bike Loan"
          description="Ride today, pay in easy EMIs — that’s the freedom of a bike loan."
          />

     </div>
    )
}
export default Section2;