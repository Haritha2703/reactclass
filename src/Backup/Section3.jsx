import Card from "./Component/Card";

function Section3(){
return(
  <div className="section3">
        <Card
          icon="fa-solid fa-building fa-2x"
          title="Office Address"
          description="No. 24, Lakshmi Nagar,
2nd Street, Anna Salai,
T. Nagar, Chennai ,
 India."
        />
        

        <Card
          icon ="fa-solid fa-phone-volume fa-2x"
          title="Call 9835795499"
          description="Small turn, big change — that’s the magic of a dial."
        />

        <Card
          icon ="fa-solid fa-location-dot fa-2x"
          title="Location"
        description="ipsum dolor sit amet consecte seinum bje"
       />
  </div>
)
}
export default Section3;