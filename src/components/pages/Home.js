import React from 'react';
import plantlife from '../../assets/plantlife.JPG';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const styles = {
  hero: {
    backgroundImage: plantlife,
    backgroundSize: "cover",
    width: '100%',
    height: (.87*windowHeight)
  }
};

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <div style={styles.hero}>
      </div>
    </div>
  );
}
