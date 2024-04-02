import { createI18n } from 'vue-i18n'
const messages = {
  en: {
    message: {
      hello: 'Welcome To Our Store',
    },
    appbar: {
      home:'Home',
      about:'About',
      products:'Products',
      contact:'Contact'
    },
    hero:{
      title1:'Ulina',
      title2:'Fashion',
      subtitle:' Get ready to elevate your style with our exclusive selection of clothing.Welcome To Ulina! Step into our virtual wardrobe and discover the perfect look for every occasion.',
      btn1:'Read more',
      btn2:' Buy Now'
    }
  },
  ar: {
    message: {
      hello: 'أهلأ بكم في متجرنا',
    },
    appbar: {
      home:'الرئيسية',
      about:'حول',
      products:'المنتجات',
      contact:'اتصل بنا'
    },
    hero:{
      title1:'أزياء',
      title2:'أولينا',
      subtitle:'استعد للارتقاء بمظهرك مع مجموعتنا الحصرية من الملابس. مرحبا بكم في أولينا! ادخل إلى خزانة الملابس الافتراضية الخاصة بنا واكتشف المظهر المثالي لكل مناسبة',
      btn1:'اقرأ المزيد',
      btn2:'اشتري الآن'
    }
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'ar',
  messages,
})
export default i18n
