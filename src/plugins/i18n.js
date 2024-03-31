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
      subtitle:' Get ready to elevate your style with our exclusive selection of clothing.Welcome To Ulina! Step into our virtual wardrobe and discover the perfect look for every occasion.'
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
      subtitle:'استعد للارتقاء بمظهرك مع مجموعتنا الحصرية من الملابس. مرحبا بكم في أولينا! ادخل إلى خزانة الملابس الافتراضية الخاصة بنا واكتشف المظهر المثالي لكل مناسبة'
    }
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'ar',
  messages,
})
export default i18n
