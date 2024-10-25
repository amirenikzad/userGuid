import React from 'react';
import { Box, Typography } from '@mui/material';

const InfoSection = ({ title, description, details, image, height }) => {
  return (
    <Box mt="20px" textAlign="right">
      <Typography variant="h4" style={{ fontFamily: "IranianSans", fontSize: "30px", fontWeight: "bolder" }}>
        {title}
      </Typography>
      <div><hr style={{ border: "1px solid black", opacity: 0.2 }} /></div>
      <Typography variant="body1" style={{ fontFamily: "IranianSans", fontSize: "18px", lineHeight: "2", textAlign: "right" }}>
        {description}
      </Typography>
      {details.map((detail, index) => (
        <Typography key={index} variant="body1" style={{ fontFamily: "IranianSans", fontSize: "18px", lineHeight: "2" }}>
          <span style={{ fontWeight: "bolder" }}>{detail.label}</span>: {detail.value}
        </Typography>
      ))}
      {image && (
        <div style={{ placeItems: "center", borderRadius: "10px", backgroundColor: "black", padding: "30px 0px", background: `url(${image}) center / 100% 100% no-repeat`, height: height }} />
      )}
    </Box>
  );
};

export default InfoSection;
