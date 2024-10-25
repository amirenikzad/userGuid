import { Box } from "@mui/material";
import Header from "./Header";
import Section from "./Section";
import InfoSection from "./InfoSection";
import Process from "./Process";
import image from '../images/0.png';

function Users() {

  return (
    <Box margin="30px 30px 30px 30px " >
      <Header/> 
      <Box margin={"50px 120px 50px 120px"}>

      <Section 
        title=""
        text1=""
        text2=""
      />
      <Process
        title=""
        content={[
          { description: "", image: image ,height:"400px"},
          { description: "", image: image ,height:"400px"},
          { description: "", image: image ,height:"400px"},
          { description: "", image: image ,height:"400px"},
          { description: "", image: image ,height:"400px"},
          { description: "", image: image ,height:"400px"},
          { description: "", image: image ,height:"400px"},
        ]}
        height="300px"
      />
      <InfoSection 
        title=""
        description=""
        details={[
          { label: '', value: '' },
          { label: '', value: '' },
          { label: '', value: '' },
          { label: '', value: '' },
          { label: '', value: '' },
          { label: '', value: '' },
        ]}
        image={image}
        height="300px"
      />
      </Box>
     </Box>
  );
}

export default Users;
