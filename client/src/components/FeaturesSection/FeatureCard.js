import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const FeatureCardWrapper = styled(motion.div)(({ theme, color }) => ({
  borderRadius: theme.shape.borderRadius,
  textAlign: "center",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  padding: theme.spacing(1) * 1.5,
  color: color,
  backgroundColor: shadeColor(color, 0.5),
  fill: color,
  padding: 12,
}));

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

function shadeColor(hex, percent) {
  // Function implementation remains the same
}

function FeatureCard(props) {
  const { Icon, color, headline, text } = props;
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  return (
    <Fragment>
      <FeatureCardWrapper
        ref={ref}
        color={color}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={iconVariants}
      >
        {Icon}
      </FeatureCardWrapper>
      <Typography variant="h5" paragraph style={{color:'grey',fontSize: "13px"}}>
        {headline}
      </Typography>
      <Typography variant="body1" color="textSecondary" style={{ fontSize: "12px" }}>
        {text}
      </Typography>
    </Fragment>
  );
}

FeatureCard.propTypes = {
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeatureCard;
