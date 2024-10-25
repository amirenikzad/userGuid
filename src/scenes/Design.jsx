import { Box } from "@mui/material";
import Header from "./Header";
import Section from "./Section";
import InfoSection from "./InfoSection";
import Process from "./Process";
import image from '../images/0.png';

function Design() {

  return (
    <Box margin="30px 30px 30px 30px " >
      <Header/> 
      <Box margin={"50px 120px 50px 120px"}>

      <Section 
        title="لیست چیدمان ها"
        text1="طراحی و ویرایش و سطح دسترسی و زمانبندی  چیدمان ها در این بخش انجام می شود"
        text2="چیدمان ها بسته به نوع فیلتر به همراه جزئیات مربوط به آن‌ها نمایش داده می شود"
        text3="و عملیات روی آن‌ها پس از انتخاب چیدمان به صورت گروهی و تکی انجام می شود"
      />
      <InfoSection 
        title="ویژگی‌ها"
        description=""
        details={[
          { label: 'فعال و غیرفعال کردن', value: 'منتشر شدن یا نشدن چیدمان بر روی نمایشگر را مشخص می کند' },
          { label: 'حذف', value: 'چیدمان را پاک می کند' },
          { label: 'سطح دسترسی', value: 'نقش هایی که می توانند به این چیدمان دسترسی داشته باشند را مشخص می کند' },
          { label: 'زنجیره چیدمان', value: 'چیدمان‌های انتخاب شده را در یک گروه قرار می دهد' },
        ]}
        image={image}
        height="300px"
      />
      <Process
        title="طراحی چیدمان جدید"
        content={[
          { description: "پس از ساخت چیدمان جدید از ۰۰۰ گزینه طراحی را انتخاب کنید تا به بخش طراحی بروید", image: image ,height:"400px"},
          { description: "در بخش طراحی می توانید ناحیه جدید بسازید و ویرایش کنید و ماژول یا ماژول های خود را بر روی آن به صورت تکی و زنچیره چیدمان قرار دهید", image: image ,height:"400px"},
          { description: "برای طرح خود طرح پس زمینه قرار دهید و در انتها پیش نمایش طرح خود را با زدن بر روی دکمه صفحه نمایش نمایش دهید", image: image ,height:"400px"},
        ]}
        height="300px"
      />
      <Section 
        title="زنجیره چیدمان"
        text1="ایجاد و ویرایش زنجیره چیدمان جدید که قابلیت تعیین و ویرایش اولویت پخش در هر چیدمان را به کاربر می دهد"
      />
      </Box>
     </Box>
  );
}

export default Design;
