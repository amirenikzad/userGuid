import { Box } from "@mui/material";
import Header from "./Header";
import Section from "./Section";
import InfoSection from "./InfoSection";
import Process from "./Process";
import image from '../images/0.png';

function Library() {

  return (
    <Box margin="30px 30px 30px 30px " >
      <Header/> 
      <Box margin={"50px 120px 50px 120px"}>

      <Section 
        title="کتابخانه"
        text1="در کتابخانه تمام فایل های آپلود شده وجود دارد و امکان فیلتر و انجام عملیات بر روی آن در نظر گرفته شده است"
        text2="و شما می توانید فایل های خود را در ابتدا بر روی کتابخانه با دسترسی های متفاوت آپلود کنید و پس از آن در بخش طراحی از فایل های موجود در آن برای ماژول های خود استفاده کنید"
      />
      {/* <Process
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
      /> */}
      </Box>
     </Box>
  );
}

export default Library;
