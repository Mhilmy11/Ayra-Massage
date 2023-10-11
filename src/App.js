import './App.css';
import AyraLogo from './Assets/00978 (1)_page-0001 1.png'
import HeroAssets from './Assets/adult-beautiful-woman-relaxing-spa-salon-with-hot-stones-back 1.png'
import ReflexiologyAssets from './Assets/adult-beautiful-woman-relaxing-spa-salon-with-hot-stones-back 3.png'
import CombinationAssets from './Assets/medical-massage-foot-physiotherapy-center.png'
import TraditionalAssets from './Assets/woman-salon-having-therapy.png'
import LulurAssets from './Assets/spa-concept-with-woman-massage.png'
import FaceAssets from './Assets/massage-face.png'
import CandleAssets from './Assets/close-up-therapist-using-candle-ear.png'
import KerokanAssets from './Assets/woman-salon-making-beauty-treatment-with-gua-sha-stone.png'
import Container from './Components/Container'

function App() {
  return (
    <>

      <div>
        <div className=' flex items-center h-[800px]'>
          <div className=' absolute left-[200px]'>
            <h1 className=' font-bold text-[48px] w-[481px]'>Family Massage & Reflexiology</h1>
            <div className=' pt-[30px]'>
              <button className=' cardcolor w-[220px] h-[49px] rounded-full text-white font-semibold text-[24px] flex items-center justify-center'>Book Now!</button>
            </div>
          </div>
          <img className=" w-full h-[800px] pt-[100px]" src={HeroAssets} alt='Hero' />
        </div>
      </div>


      <header className=' absolute top-0'>
        <div className=' fixed bg-white w-full h-[217px] flex justify-center shadow-xl'>
          <div>

            <div className=' flex justify-center py-5'>
              <img src={AyraLogo} alt='Ayra'/>
            </div>

            <div className=' text-[20px] font-semibold'>
            <a href="">Home</a>
            <a className=' px-8' href="">Services</a>
            <a href="">About</a>
          </div>          

          </div>
        </div>
      </header>


      <div>
        <div className=' flex justify-center pt-[46px] font-bold text-[40px]'>Services</div>
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
        <div className=' cardcolor w-full h-[271px]'>
          <Container>
            <div className=' flex items-center h-[271px] w-full'>
              <div className=' text-white'>
                <h1 className=' text-[50px] font-semibold'>About</h1>
                <p>Address :</p>
                <p>Whatsapp Number :</p>
                <p>Email :</p>
              </div>
            </div>
          </Container>
        </div>
      </div>

    </>
  );
}

export default App;
