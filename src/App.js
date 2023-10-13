import './App.css';
import { useRef } from 'react';
import Container from './Components/Container'
import AyraLogo from './Assets/00978 (1)_page-0001 1.png'
import HeroAssets from './Assets/adult-beautiful-woman-relaxing-spa-salon-with-hot-stones-back 1.png'
import ReflexiologyAssets from './Assets/adult-beautiful-woman-relaxing-spa-salon-with-hot-stones-back 3.png'
import CombinationAssets from './Assets/medical-massage-foot-physiotherapy-center.png'
import TraditionalAssets from './Assets/woman-salon-having-therapy.png'
import LulurAssets from './Assets/spa-concept-with-woman-massage.png'
import FaceAssets from './Assets/massage-face.png'
import CandleAssets from './Assets/close-up-therapist-using-candle-ear.png'
import KerokanAssets from './Assets/woman-salon-making-beauty-treatment-with-gua-sha-stone.png'
import WavePng from './Assets/wave.png'
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi"
import ReactWhatsapp from 'react-whatsapp';

function App() {

  const about = useRef(null);
  const services = useRef(null);
  const home = useRef(null);

  const handleClickToHome = () => {
    home.current?.scrollIntoView({behavior: 'smooth'})
  }

  const handleClickToServices = () => {
    services.current?.scrollIntoView({behavior: 'smooth'})
  }

  const handleClickToAbout = () => {
    about.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <>

      <div ref={home}>
        <div className=' flex items-center h-[800px]'>
          <div className=' absolute left-[200px] top-[450px]'>
            <h1 className=' font-bold text-[48px] w-[481px]'>Family Massage & Reflexiology</h1>
            <div className=' pt-[30px]'>
              <button className=' button-5'>
                <ReactWhatsapp number='+62 85311985211' massage='Hallo kak!, Saya ingin Booking di Ayra Massage'>Book Now!</ReactWhatsapp>
              </button>
            </div>
          </div>
          <img className=" w-full h-[900px]" src={HeroAssets} alt='Hero' />
        </div>
      </div>


      <header className=' absolute top-0'>
        <div className=' fixed bg-white w-full h-[217px] flex justify-center shadow-xl opacity-100'>
          <div>
            <div className=' flex justify-center py-5'>
              <img src={AyraLogo} alt='Ayra'/>
            </div>
            <div className=' text-[20px] font-semibold'>
              <button onClick={handleClickToHome}>Home</button>
              <button onClick={handleClickToServices} className=' px-8'>Services</button>
              <button onClick={handleClickToAbout}>About</button>
            </div>          
          </div>
        </div>
      </header>


      <div ref={services} className=' pt-[100px]'>
        <div className=' flex justify-center font-bold text-[40px]'>Services</div>
        <div className=' flex justify-center pt-2'>
          <div className=' bg-black w-[1050px] h-[1px]'></div>
        </div>
      </div>


      <div className=' pt-[80px]'>
        <Container>
          <div className=' flex justify-center gap-[200px]'>
            <div>
              <img className=' rounded-3xl w-[632px] h-[472px]' src={ReflexiologyAssets} alt='Refelxiology'/>
            </div>
            <div>
              <div className=' pb-[30px] font-bold text-[34px]'>Reflexiology</div>
              <div className=' cardcolor rounded-2xl flex justify-center items-center'>
                <div className=' text-white font-semibold text-[35px] p-[30px]'>
                  <p>Rp. 70.000 - 1 JAM</p>
                  <p className=' py-[30px]'>Rp. 90.000 - 1 JAM</p>
                  <p>Rp. 110.000 - 1 JAM</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>


      <div className=' pt-[121px]'>
        <Container>
          <div className=' flex justify-center gap-[200px]'>
            <div>
              <div className=' pb-[30px] font-bold text-[34px]'>Kombinasi Reflexiology</div>
              <div className=' cardcolor rounded-2xl flex justify-center items-center'>
                <div className=' text-white font-semibold text-[35px] p-[30px]'>
                  <p>Rp. 80.000 - 1 JAM</p>
                  <p className=' py-[30px]'>Rp. 110.000 - 1 JAM</p>
                  <p>Rp. 140.000 - 1 JAM</p>
                </div>
              </div>
            </div>
            <div>
              <img className=' rounded-3xl w-[633px] h-[423px]' src={CombinationAssets} alt='Combination'/>
            </div>
          </div>
        </Container>
      </div>


      <div className=' pt-[121px]'>
        <Container>
          <div className=' flex justify-center gap-[200px]'>
            <div>
              <img className=' rounded-3xl w-[632px] h-[420px]' src={TraditionalAssets} alt='Traditional'/>
            </div>
            <div>
              <div className=' pb-[30px] font-bold text-[34px]'>Massage Tradisional</div>
              <div className=' cardcolor rounded-2xl flex justify-center items-center'>
                <div className=' text-white font-semibold text-[35px] p-[30px]'>
                  <p>Rp. 120.000 - 1 JAM</p>
                  <p className=' py-[30px]'>Rp. 150.000 - 1 JAM</p>
                  <p>Rp. 200.000 - 1 JAM</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>


      <div className=' pt-[121px]'>
        <Container>
          <div className=' flex justify-center gap-[200px]'>
            <div>
              <div className=' pb-[30px] font-bold text-[34px]'>Lulur Massage</div>
              <div className=' cardcolor rounded-2xl flex justify-center items-center'>
                <div className=' text-white font-semibold text-[35px] p-[30px]'>
                  <p>Rp. 150.000 - 1 JAM</p>
                  <p className=' py-[30px]'>Rp. 180.000 - 1 JAM</p>
                  <p>Rp. 220.000 - 1 JAM</p>
                </div>
              </div>
            </div>
            <div>
              <img className=' rounded-3xl w-[633px] h-[421px]' src={LulurAssets} alt='Lulur'/>
            </div>
          </div>
        </Container>
      </div>


      <div className=' pt-[121px]'>
        <Container>
          <div className=' flex justify-center gap-[200px]'>
            <div>
              <img className=' rounded-3xl w-[632px] h-[420px]' src={CandleAssets} alt='Candle'/>
            </div>
            <div>
              <div className=' pb-[30px] font-bold text-[34px]'>Ear Candle</div>
              <div className=' cardcolor rounded-2xl flex justify-center items-center'>
                <div className=' text-white font-semibold text-[35px] p-[30px]'>
                  <p>Rp. 50.000 - 1 JAM</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>


      <div className=' pt-[121px]'>
        <Container>
          <div className=' flex justify-center gap-[200px]'>
            <div>
              <div className=' pb-[30px] font-bold text-[34px]'>Totok Wajah</div>
              <div className=' cardcolor rounded-2xl flex justify-center items-center'>
                <div className=' text-white font-semibold text-[35px] p-[30px]'>
                  <p>Rp. 60.000 - 1 JAM</p>
                </div>
              </div>
            </div>
            <div>
              <img className=' rounded-3xl w-[633px] h-[421px]' src={FaceAssets} alt='Face'/>
            </div>
          </div>
        </Container>
      </div>


      <div className=' pt-[121px]'>
        <Container>
          <div className=' flex justify-center gap-[200px]'>
            <div>
              <img className=' rounded-3xl w-[632px] h-[420px]' src={KerokanAssets} alt='Kerokan'/>
            </div>
            <div>
              <div className=' pb-[30px] font-bold text-[34px]'>Kerokan</div>
              <div className=' cardcolor rounded-2xl flex justify-center items-center'>
                <div className=' text-white font-semibold text-[35px] p-[30px]'>
                  <p>Rp. 50.000 - 1 JAM</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>


      <div className=' pt-[100px]'>    
        <div className=' absolute flex items-center justify-center h-[300px] w-full'>
          <div className=' text-white text-center'>
            <h1 ref={about} className=' text-[50px] font-semibold'>About Information</h1>
            <div className=' flex pt-5'>
              <div className=' flex items-center w-[400px]'>
                <div className=' pr-3'><FaLocationDot size={50}/></div>
                <p className=' font-medium'>Ruko Citra Grand Blok R3/10, Komplek Ruko Mall Ciputra.
                  JI. Alternatif Cibubur Cileungsi KM 4 RT 005 RW 011,
                  Kel. Jatikarya, Kec. Jatisampurna, Kota Bekasi, Jawa Barat 17435</p>
              </div>
              <div className=' flex items-center px-[100px]'>
                <div className=' pr-3'><FaWhatsapp size={50} /></div>
                <p className=' font-medium text-[20px]'>+62 853-1198-5211</p>
              </div>
              <div className=' flex items-center'>
                <div className=' pr-3'><HiOutlineMail size={50} /></div>
                <p className=' font-medium text-[20px]'>ayramassage@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <img className=' w-full h-[300px] cardcolor' src={WavePng} alt="FooterAssets" />
      </div>

    </>
  );
}

export default App;
