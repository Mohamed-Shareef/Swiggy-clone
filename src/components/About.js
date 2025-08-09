import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const About = () => {
  const aboutus = useSelector((store) => store.aboutus.items);
  console.log(aboutus);

  return (
    <div>
      <h1>About US</h1>
      <p>
        Swiggy is one of India's largest and most popular food delivery
        platforms, headquartered in Bangalore. Founded in 2014 by Sriharsha
        Majety, Nandan Reddy, and Rahul Jaimini, Swiggy has grown rapidly to
        become a household name in the Indian food delivery market. Here's a
        brief overview of Swiggy
      </p>
      <h2>Key Features and Services</h2>
      <h3>Food Delivery:</h3>
      <p>
        Swiggy connects users with a wide range of restaurants and eateries in
        their vicinity, offering a vast selection of cuisines. Customers can
        browse menus, place orders, and have food delivered to their doorstep
      </p>
      <h3>Swiggy Genie:</h3>
      <p>
        This is Swiggy's instant pick-up and drop service that allows users to
        send packages, groceries, and other essentials across the city.
      </p>

      <h3>Swiggy Instamart:</h3>
      <p>
        A quick-commerce grocery delivery service that offers essential
        groceries and household items delivered within a short period, usually
        under an hour.
      </p>
      <h2>Business Model</h2>
      <p>
        Swiggy operates on a hyperlocal logistics model, leveraging technology
        to optimize delivery times and enhance user experience. The revenue
        primarily comes from delivery fees, commissions from partner
        restaurants, advertising, and subscription services like Swiggy Super.
      </p>
      <h2>Market Presence and Competition</h2>
      <p>
        Swiggy competes with other major food delivery platforms like Zomato,
        Uber Eats (which was acquired by Zomato in India), and various regional
        players. Despite stiff competition, Swiggy maintains a strong market
        presence due to its extensive network, user-friendly app, and innovative
        services
      </p>
      <div>
        <ItemList Item={aboutus} />
      </div>
    </div>
  );
};

export default About;
