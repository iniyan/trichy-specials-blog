"use client"
import { useState } from "react"
import Image from "next/image"
import { usePageViewTracking } from "@/hooks/use-analytics"
import { SiteHeader } from "@/components/site-header"
import { CelebrityDetailModal } from "@/components/celebrity-detail-modal"
import { ClapsButton } from "@/components/claps-button"
import { ShareButtons } from "@/components/share-buttons"
import { ReadingProgressBar } from "@/components/reading-progress-bar"
import { BookmarkButton } from "@/components/bookmark-button"

// Celebrity data for the popup content
const otherCelebrities = [
  {
    id: "james-vasanthan",
    name: "ஜேம்ஸ் வசந்தன்",
    image: "/james-vasanthan.jpeg",
    description: "இசைக்கும் அறிவுக்கும் பாலமாக இருந்தவர்.",
    fullDescription:
      "இசைக்கும் அறிவுக்கும் பாலமாக இருந்தவர். பாடல்கள், பேச்சு, பத்திரிகை, மற்றும் இயக்கம் என பல துறைகளில் கலக்கி வரும் ஜேம்ஸ் வசந்தன், திருச்சியின் கலையரங்கில் உருவானவர். சுப்ரமணியபுரம் படத்தின் மூலம் இசை ரசிகர்களின் மனதை வென்றவர். அவரது இசை பயணம் திருச்சியில் இருந்து தொடங்கி, தமிழ் திரையுலகம் முழுவதும் பரவியது. அவரது பாடல்கள் இளைஞர்களிடையே பெரும் வரவேற்பைப் பெற்றுள்ளன. அவர் ஒரு சிறந்த ஆசிரியராகவும், பத்திரிகையாளராகவும் பணியாற்றி வருகிறார்.",
  },
  {
    id: "girish",
    name: "கிரிஷ்",
    image: "/girish-singer.jpg",
    description: "காதல் பாடல்களின் மெல்லிய குரல்.",
    fullDescription:
      'காதல் பாடல்களின் மெல்லிய குரல். "ஜூன் போனால் ஜூலை" காதல் பாடலுடன் தமிழ் திரையுலகில் முதன்முறையாக அறிமுகமான கிரிஷ், திருச்சியில்தான் வளர்ந்தவர். இவர் தமிழில் மட்டுமல்லாமல் பல மொழிகளிலும் பாடியுள்ளார். திருச்சியில் பிறந்து வளர்ந்த கிரிஷ், தனது இனிமையான குரலால் பல இசையமைப்பாளர்களின் கவனத்தை ஈர்த்தார். அவரது குரலின் தனித்துவம் காதல் பாடல்களுக்கு ஒரு புதிய பரிமாணத்தைக் கொடுத்துள்ளது. இன்று தமிழ் திரையுலகில் முன்னணி பாடகர்களில் ஒருவராக திகழ்கிறார்.',
  },
  {
    id: "prasanna",
    name: "பிரசன்னா",
    image: "/prasanna-actor.webp",
    description: "கலைபாரதியின் அழுத்தமான நடிப்பு.",
    fullDescription:
      "கலைபாரதியின் அழுத்தமான நடிப்பு. 'ஃபைவ் ஸ்டார்ஸ்' படம் மூலம் திரையுலகில் அறிமுகமானவர். இன்று, வித்தியாசமான கதாபாத்திரங்களில் அழுத்தமான நடிப்பை வெளிப்படுத்தும் நடிகராகத் திகழ்கிறார். அவருடைய நடிப்பில் திருச்சியின் நிமிர்ந்த பார்வையும், வேரோட்டமுள்ள உணர்வுகளும் தெளிவாகத் தெரிகின்றன. திருச்சியில் பிறந்து வளர்ந்த பிரசன்னா, தனது கல்லூரி நாட்களில் நாடகங்களில் நடித்து வந்தார். அவரது நடிப்புத் திறமை அவரை திரைப்படத் துறைக்கு அழைத்து வந்தது. அவர் நடித்த அனைத்து படங்களிலும் தனது பாத்திரத்தை உயிர்ப்புடன் வெளிப்படுத்தி வருகிறார்.",
  },
  {
    id: "vali",
    name: "வாலி",
    image: "/vali-lyricist.webp",
    description: "தமிழ்ப் பாடல்களின் பொக்கிஷம்.",
    fullDescription:
      "தமிழ்ப் பாடல்களின் பொக்கிஷம். திருச்சியில் பிறந்த வாலி, தமிழ் திரையுலகின் மிகவும் விரிவாகப் பாடல் எழுதியவர்களில் ஒருவர். 50 வருடங்களுக்கும் மேல் தமிழ்த்திரையுலகை அழகுபடுத்திய இவர், ஒரே ஒரு வார்த்தையில் ஒரு கதையை சொல்லக்கூடியவராக இருந்தார். அவரது பாடல் வரிகள் தமிழ் மொழியின் அழகையும், ஆழத்தையும் வெளிப்படுத்துகின்றன. அவர் எழுதிய பாடல்கள் காலத்தால் அழியாத கலைப்படைப்புகளாக நிலைத்து நிற்கின்றன. அவரது பங்களிப்பு தமிழ் திரைப்பாடல்களின் தரத்தை உயர்த்தியுள்ளது.",
  },
  {
    id: "sujatha",
    name: "சுஜாதா",
    image: "/sujatha-writer.jpg",
    description: "அறிவியல் கதை சொல்லும் தமிழ்ச் சிந்தனையாளர்.",
    fullDescription:
      "அறிவியல் கதை சொல்லும் தமிழ்ச் சிந்தனையாளர். திருச்சியில் பிறந்த இவர், தமிழ் எழுத்துலகில் அறிவியலைக் கதைகளின் ஊடாகக் கொண்டு வந்தவர். தமிழ் அறிவியல் புனைகதையில் முன்னோடியாக இருந்த இவர், இன்றும் படிக்கப்படுகிறார். அவரது எழுத்துக்கள் தமிழ் இலக்கியத்தில் ஒரு புதிய பாதையை உருவாக்கின. அவர் எழுதிய நூல்கள் பல தலைமுறைகளை கவர்ந்துள்ளன. அவரது படைப்புகள் தமிழ் மொழியின் வளர்ச்சிக்கு பெரும் பங்களிப்பை அளித்துள்ளன. அவரது அறிவியல் கதைகள் இளைஞர்களிடையே அறிவியல் ஆர்வத்தை தூண்டியுள்ளன.",
  },
]

export default function CelebritiesPage() {
  // Track page views
  usePageViewTracking()

  const [selectedCelebrity, setSelectedCelebrity] = useState<(typeof otherCelebrities)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openCelebrityModal = (celebrity: (typeof otherCelebrities)[0]) => {
    setSelectedCelebrity(celebrity)
    setIsModalOpen(true)
  }

  const closeCelebrityModal = () => {
    setIsModalOpen(false)
  }

  // Get current URL for sharing
  const pageUrl = typeof window !== "undefined" ? window.location.href : ""

  return (
    <div className="min-h-screen bg-white">
      {/* Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Site Header */}
      <SiteHeader />

      {/* Engagement Features */}
      <ClapsButton postId="trichy-celebrities" />
      <ShareButtons title="திருச்சியிலிருந்து சினிமாவில் வெற்றி பெற்ற நட்சத்திரங்கள்" url={pageUrl} />
      <BookmarkButton postId="trichy-celebrities" title="திருச்சியிலிருந்து சினிமாவில் வெற்றி பெற்ற நட்சத்திரங்கள்" />

      {/* Header */}
      <header className="relative w-full overflow-hidden">
        <div className="w-full">
          <Image
            src="/trichy-cinema-banner.png"
            alt="திருச்சியிலிருந்து சினிமாவில் வெற்றி பெற்ற நட்சத்திரங்கள்"
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            திருச்சியிலிருந்து சினிமாவில் வெற்றி பெற்ற நட்சத்திரங்கள்
          </h1>
          <p className="max-w-2xl text-lg font-medium leading-relaxed sm:text-xl">யார் தெரியுமா?</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <p className="mb-8 font-serif text-xl leading-relaxed text-gray-700">
            தமிழகத்தின் நடுப்பகுதியில் பெருமையுடன் திகழும் திருச்சி — கல்வியில் சிறந்து விளங்கும் நகரம், கலாச்சாரத்திற்கும் போராட்டத்திற்குமான
            அடையாளம். ஆனால், இந்த நகரம் இந்திய அளவிலும் உலக அளவிலும் புகழ்பெற்றவர்களையும் உருவாக்கியுள்ளது என்பது உங்களுக்குத் தெரியுமா?
          </p>
          <p className="mb-8 font-serif text-xl leading-relaxed text-gray-700">
            இந்தக் கட்டுரையில், திருச்சியில் பிறந்து வளர்ந்து, தேசியளவிலும் சர்வதேச அளவிலும் பெயர் பெற்ற பிரபலங்களைப் பற்றி ஒரு பார்வை
            பார்க்கலாம்.. ஆச்சரியம் தரக்கூடிய பலரும் இதில் உண்டு. தவிர்க்காமல் முழுவதையும் படிக்கவும்.
          </p>

          {/* Ad Slot 1 - Anbil Mahesh WhatsApp Channel */}
          <div className="my-12 overflow-hidden rounded-lg">
            <a href="https://2ly.link/26OWZ" target="_blank" rel="noopener noreferrer" className="block w-full">
              <div className="w-full">
                <Image
                  src="/anbil-mahesh-whatsapp-ad.jpeg"
                  alt="Join Anbil Mahesh WhatsApp Channel"
                  width={1200}
                  height={200}
                  className="w-full h-auto"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </a>
          </div>
        </section>

        {/* Kamal Haasan */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-orange-500"></div>
            <h2 className="font-serif text-3xl font-bold text-gray-800">கமல்ஹாசன் – திரைப்பட மேதை</h2>
          </div>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <Image
                src="/kamal-haasan.jpeg"
                alt="கமல்ஹாசன்"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-800">தமிழரின் பெருமை</h3>
              <p className="mb-4 text-gray-600">
                பரமக்குடியில் பிறந்தாலும், திருச்சியில் வளர்ந்த கமல் திரையுலகத்தின் பல பரிமாணங்களிலும் திகழ்கிறார். நடிகர், இயக்குனர்,
                எழுத்தாளர், இப்போது அரசியல்வாதியாகவும், தமிழ் மக்களின் குரலாகவும் திகழ்கிறார்.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>பல பரிமாணங்கள்:</strong> நடிகர், இயக்குனர், தயாரிப்பாளர், பாடகர், நடன கலைஞர் என பல முகங்களைக் கொண்டவர்.
                </p>
                <p>
                  <strong>சாதனைகள்:</strong> பத்ம பூஷண், பத்ம ஸ்ரீ உள்ளிட்ட பல விருதுகளைப் பெற்றவர். இந்திய சினிமாவின் உயரிய விருதான தாதா
                  சாகேப் பால்கே விருதும் பெற்றுள்ளார்.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Slot 2 - Join X */}
        <div className="my-12 overflow-hidden rounded-lg">
          <a href="https://2ly.link/26OWs" target="_blank" rel="noopener noreferrer" className="block w-full">
            <div className="w-full">
              <Image
                src="/anbil-mahesh-x-ad.jpeg"
                alt="Join X with Anbil Mahesh"
                width={1200}
                height={200}
                className="w-full h-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
          </a>
        </div>

        {/* S.A. Ashokan */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-orange-500"></div>
            <h2 className="font-serif text-3xl font-bold text-gray-800">எஸ். ஏ. அசோகன்</h2>
          </div>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center md:order-2">
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-800">வில்லனின் வரையறை</h3>
              <p className="mb-4 text-gray-600">
                திருச்சியில் பிறந்த எஸ். ஏ. அசோகன், தமிழ்த் திரைப்பட வரலாற்றில் இடம்பிடித்த ஒரு தனித்துவமான நடிகர். அவர் நடித்த ஒவ்வொரு
                படத்திலும் அவர் காட்டிய கட்டுப்பாடும், வசனம் உதைத்த நடிப்பும் வில்லன் கதாபாத்திரங்களுக்கே புதிய மாதிரியை உருவாக்கின.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>சிறந்த படங்கள்:</strong> நடோடிகள், அய்யா, தையாக்கரன் போன்ற வெற்றிப்படங்களில் அவர் மறக்கமுடியாத தோற்றங்களை
                  உருவாக்கினார்.
                </p>
                <p>
                  <strong>பண்புகள்:</strong> திரையுலகில் ஒழுக்கம், நேர்மை, கலைப் பற்றுள்ள அக்கறை ஆகியவற்றிற்கு முன்மாதிரியானவர்.
                </p>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg md:order-1">
              <Image
                src="/sa-ashokan.jpg"
                alt="எஸ். ஏ. அசோகன்"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Ad Slot 3 - Join Instagram */}
        <div className="my-12 overflow-hidden rounded-lg">
          <a href="https://2ly.link/26OWx" target="_blank" rel="noopener noreferrer" className="block w-full">
            <div className="w-full">
              <Image
                src="/anbil-mahesh-instagram-ad.jpeg"
                alt="Join Instagram with Anbil Mahesh"
                width={1200}
                height={200}
                className="w-full h-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
          </a>
        </div>

        {/* Sivakarthikeyan */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-orange-500"></div>
            <h2 className="font-serif text-3xl font-bold text-gray-800">சிவகார்த்திகேயன்</h2>
          </div>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <Image
                src="/sivakarthikeyan.jpeg"
                alt="சிவகார்த்திகேயன்"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-800">
                திருச்சியிலிருந்து வந்து தமிழ் திரையுலகத்தை வென்ற ஹீரோ
              </h3>
              <p className="mb-4 text-gray-600">
                திருச்சியில் பிறந்த, விஜய் டிவி anchor ஆகத் துவங்கி, இன்று கோலிவுட்டில் முக்கியமான ஹீரோவாகத் திகழ்கிறார். இவரது எளிமை,
                நகைச்சுவை மற்றும் மக்கள் சார்பு கதாபாத்திரங்கள் அவரை 'மக்கள் மனசின் ஹீரோ' ஆக்கியுள்ளன.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>பயணம்:</strong> விஜய் டிவியில் தொகுப்பாளராக இருந்து, நடிகராக உயர்ந்து, இன்று தயாரிப்பாளராகவும் இருக்கிறார்.
                </p>
                <p>
                  <strong>வெற்றிப் படங்கள்:</strong> மாநகரம், ஹீரோ, டாக்டர், டான் போன்ற படங்கள் மூலம் ரசிகர்களின் மனதை வென்றவர்.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Slot 4 - Repeat of Ad Slot 1 (WhatsApp) */}
        <div className="my-12 overflow-hidden rounded-lg">
          <a href="https://2ly.link/26OWZ" target="_blank" rel="noopener noreferrer" className="block w-full">
            <div className="w-full">
              <Image
                src="/anbil-mahesh-whatsapp-ad.jpeg"
                alt="Join Anbil Mahesh WhatsApp Channel"
                width={1200}
                height={200}
                className="w-full h-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
          </a>
        </div>

        {/* Other Celebrities */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-orange-500"></div>
            <h2 className="font-serif text-3xl font-bold text-gray-800">மற்ற பிரபலங்கள்</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherCelebrities.map((celebrity) => (
              <div
                key={celebrity.id}
                onClick={() => openCelebrityModal(celebrity)}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md cursor-pointer"
              >
                <div className="relative h-48">
                  <Image
                    src={celebrity.image || "/placeholder.svg"}
                    alt={celebrity.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-serif text-lg font-semibold text-gray-800">{celebrity.name}</h3>
                  <p className="mb-3 text-sm text-gray-600">{celebrity.description}</p>
                  <div className="flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700">
                    <span>மேலும் படிக்க</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="rounded-lg bg-orange-50 p-8">
            <h2 className="mb-4 font-serif text-2xl font-bold text-gray-800">திருச்சி: கலை மற்றும் கலாச்சாரத்தின் தொட்டில்</h2>
            <p className="mb-4 text-gray-700">
              திருச்சி என்பது வெறும் கோயில்களுக்கும், கல்விக்கும் மட்டுமே பெயர் பெற்ற நகரம் அல்ல. இது பல திறமைகளை உருவாக்கிய களமாகவும்
              இருக்கிறது. இங்கிருந்து உருவான கலைஞர்கள் தமிழ் திரையுலகத்தில் தங்கள் தனித்துவமான முத்திரையை பதித்துள்ளனர்.
            </p>
            <p className="text-gray-700">
              இந்த பட்டியல் முழுமையானது அல்ல. திருச்சியிலிருந்து வந்த பல கலைஞர்கள், எழுத்தாளர்கள், இசைக்கலைஞர்கள் மற்றும் நடிகர்கள் இன்னும் பலர்
              உள்ளனர். அவர்கள் அனைவரும் தமிழ் கலாச்சாரத்தின் வளர்ச்சிக்கு பெரும் பங்காற்றியுள்ளனர்.
            </p>
          </div>
        </section>

        {/* Comment Section */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-orange-500"></div>
            <h2 className="font-serif text-3xl font-bold text-gray-800">கருத்துகள்</h2>
          </div>

          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-medium">
                  R
                </div>
                <div>
                  <p className="font-medium text-gray-800">ரமேஷ்</p>
                  <p className="text-xs text-gray-500">2 நாட்களுக்கு முன்</p>
                </div>
              </div>
              <p className="text-gray-700">
                கமல் ஹாசன் பற்றிய தகவல்கள் மிகவும் சுவாரஸ்யமாக இருந்தது. அவர் திருச்சியில் வளர்ந்தது எனக்கு தெரியாது!
              </p>
            </div>

            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-medium">
                  S
                </div>
                <div>
                  <p className="font-medium text-gray-800">சுரேஷ்</p>
                  <p className="text-xs text-gray-500">1 வாரத்திற்கு முன்</p>
                </div>
              </div>
              <p className="text-gray-700">
                ஜேம்ஸ் வசந்தன் பற்றிய தகவல்கள் அருமை. அவரது இசை எனக்கு மிகவும் பிடிக்கும். சுப்ரமணியபுரம் படத்தின் பாடல்கள் இன்றும் என்
                பிடித்த பாடல்களில் உள்ளன.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
              கருத்து சேர்க்க
            </button>
          </div>
        </section>
      </main>

      {/* Celebrity Detail Modal */}
      <CelebrityDetailModal isOpen={isModalOpen} onClose={closeCelebrityModal} celebrity={selectedCelebrity} />
    </div>
  )
}
