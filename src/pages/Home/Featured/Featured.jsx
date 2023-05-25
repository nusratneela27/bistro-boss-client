import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css';
import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading="Check It Out"
                heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aliquid nisi. Neque, ducimus ratione. Molestiae sed aliquam totam rerum possimus nemo. Minima, tempore omnis harum nisi magnam possimus! Officia tempore nam minus facilis! Quis perferendis minima sequi, doloribus quos deleniti veniam ipsam rerum quibusdam magnam molestiae quidem, neque debitis repellendus.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;