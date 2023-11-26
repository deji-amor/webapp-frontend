import { useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import { motion, useInView, useAnimation } from "framer-motion";

const Slide = ({children, position, y_axis_start=100, y_axis_end=0}) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls])

  return (
    <div ref={ref} className={position === "relative" ? 'relative-slide' : 'absolute-slide'}>
        <motion.div
        variants={{
            hidden: {opacity: 0, y: y_axis_start},
            visible: {opacity: 1, y: y_axis_end}
        }}
        style={{padding: "0"}}
        initial="hidden"
        animate={mainControls}
        transition={{duration: .5, delay: .25}}
        >
            {children}
        </motion.div>
    </div> 
  )
}

Slide.propTypes = {
    children: PropTypes.element,
    position: PropTypes.string,
    y_axis_start: PropTypes.number,
    y_axis_end: PropTypes.number
  }

export default Slide