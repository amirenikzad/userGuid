// Section.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function Section({ title, text1, text2, text3 }) {
  return (
    <Box mt="20px" textAlign="right">
      <Typography variant="h4" style={{ fontFamily: "IranianSans", fontSize: "30px", fontWeight: "bolder" }}>
        {title}
      </Typography>
      <div>
        <hr style={{ border: "1px solid black", opacity: 0.2 }} />
      </div>
      <Typography variant="body1" style={{ fontFamily: "IranianSans", fontSize: "18px", lineHeight: "1.8" }}>
        {text1}
      </Typography>
      <Typography variant="body1" style={{ fontFamily: "IranianSans", fontSize: "18px", lineHeight: "1.8" }}>
        {text2}
      </Typography>
      <Typography variant="body1" style={{ fontFamily: "IranianSans", fontSize: "18px", lineHeight: "1.8" }}>
        {text3}
      </Typography>
    </Box>
  );
}

export default Section;