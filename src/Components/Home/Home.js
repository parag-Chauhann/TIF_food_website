import React from 'react';
import Info from '../Info/Info';
import AboutUs from '../AboutUs/AboutUs';
import CardSlider from '../CardSlider/CardSilder';
import img1 from "../CardSlider/IMG/Picture1.png";
import img2 from "../CardSlider/IMG/Picture3.png";
import img3 from "../CardSlider/IMG/Picture4.png";
import img4 from "../CardSlider/IMG/Picture5.png";
import img5 from "../CardSlider/IMG/Picture6.png";
import img6 from "../CardSlider/IMG/Picture7.png";
import Footer from '../Footer/Footer';

function Home() {
  const dummyData = [
    {
      subCards: [
        {
          image: img1,
          title: 'Grilled  Tomatoes at Home',
          description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...',
        },
        {
          image: img2,
          title: 'Snacks for Travel',
          description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...',
        },
        {
          image: img3,
          title: 'Post-workout Recipes',
          description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...',
        },
      ],
    },
    {
      subCards: [
        {
          image: img4,
          title: 'How To Grill Corn',
          description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...',
        },
        {
          image: img5,
          title: 'Crunchwrap Supreme',
          description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...',
        },
        {
          image: img6,
          title: 'Broccoli Cheese Soup',
          description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...',
        },
      ],
    },
  ];

  return (
    <div>
      <Info />
      <AboutUs />
      <CardSlider cards={dummyData} />
      <Footer />
    </div>
  );
}

export default Home;
