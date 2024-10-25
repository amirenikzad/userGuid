import { Box } from "@mui/material";
import Header from "./Header";
import Section from "./Section";
import InfoSection from "./InfoSection";
import Process from "./Process";
import image from '../images/0.png';
import image10 from '../images/10.png';
import image11 from '../images/11.png';
import image12 from '../images/12.png';
import image13 from '../images/13.png';
import image14 from '../images/14.png';
import image15 from '../images/15.png';
// import image16 from '../images/16.png';

function Monitor() {

  return (
    <Box margin="30px 30px 30px 30px " >
      <Header/> 
      <Box margin={"50px 120px 50px 120px"}>

      <InfoSection 
        title="لیست صفحه نمایش ها"
        description="نمایش صفحه نمایش ها بر اساس فیلتر اعمال شده به همراه جزئیات مربوط به آن‌ها انجام عملیات بر روی موارد انتخاب شده (جزئیات عملیات در صفحات قبلی توضیح داده شده است)"
        details={[
          { label: 'چیدمان اصلی', value: 'طرحی که برای صفحه نمایش انتخاب شده تا نمایش داده شود' },
          // { label: '', value: '' },
        ]}
        image={image10}
        height="200px"
      />
      <InfoSection 
        title="گروه های صفحه نمایش"
        description="نمایشگر هایی که می خواهیم به صورت یکپارچه مدیریت کنیم را می توانیم در یک گروه قرار دهیم ، از این گروه ها می توان در زمان اختصاص چیدمان و یا زمان بندی محتوا استفاده کرد گروه نمایشگر جدید بسازیم و ویرایش کنیم"
        details={[
          { label: 'نام', value: 'برای گروه صفحه نمایش ها یک تام انتخاب کنید' },
          { label: 'صفحه نمایش‌ها', value: 'صفحه نمایش های که می خواهید در یک گروه باشند را انتخاب کنید' },
        ]}
        image={image11}
        height="180px"
      />
      <Process
        title="پروفایل صفحه نمایش"
        content={[
          { description: "تنظیمات صفحه نمایش مانند مدت زمان به روز رسانی، بازه زمانی دریافت محتوا و غیره در این قسمت گفته می شود", image: image12 ,height:"150px" },
          { description: "کلیک بر روی پروفایل جدید", image: image13 ,height:"450px"},
          { description: "سطح لاگ", image: image14 ,height:"200px"},
          { description: "تنظیمات عمومی", image: image15 ,height:"350px"},
          // { description: "", image: image ,height:"200px"},
        ]}
        
      />
      {/* <InfoSection 
        title=""
        description=""
        details={[
          { label: 'سطح لاگ', value: 'سطح لاگ های نرم افزار کلاینت در سه سطح از این قسمت قابل تنظیم است' },
        ]}
        image={image}
        height="300px"
      /> */}
      </Box>
     </Box>
  );
}

export default Monitor;
