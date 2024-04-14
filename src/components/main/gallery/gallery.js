import React, { useContext } from 'react';
import { DataContext } from '../../../context';

function Gallery() {
    const { data } = useContext(DataContext);

    return (
        <div className="gallery">
          <p>Welcome to my studio and gallery. One of my defining principles is conveying a sense of awe through the timeless medium of oil painting, establishing an open dialogue between form and emotion in all aspects of my artwork. Look through my work to see this in action, and <a href="./contact">get in touch</a> for more information. Some of my paintings can be seen at the <a href="https://garrettarts.org/">Gallery Shop</a> in Oakland, MD.</p>
          <p>©2024 by Equidel Art</p>
        </div>
    );
};

export default Gallery;