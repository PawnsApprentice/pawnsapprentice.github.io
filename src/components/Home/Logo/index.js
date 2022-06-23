import './index.scss'
import LogoH from '../../../assets/images/logo-big.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  useEffect(() => {
    console.log(outlineLogoRef)
    console.log(solidLogoRef)
    const logo = document.querySelectorAll('#logo path')

    // gsap.registerPlugin(DrawSVGPlugin)

    // gsap
    //   .timeline()
    //   .to(bgRef.current, {
    //     duration: 1,
    //     opacity: 1,
    //   })
    //   .from(outlineLogoRef.current, {
    //     drawSVG: 0,
    //     duration: 17,
    //   })
    // gsap.fromTo(
    //   solidLogoRef.current,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     delay: 4,
    //     duration: 4,
    //   }
    // )
  }, [])
  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoH} alt="H" />
      <svg
        id="logo"
        width="570pt"
        height="870pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M700 3810 l-137 -137 0 -3683 0 -3682 633 0 632 0 143 143 142 142 0
1458 0 1457 440 0 440 0 0 -1600 0 -1600 638 0 637 0 138 138 137 137 0 3683
0 3682 -633 0 -632 0 -143 -143 -142 -142 0 -1403 0 -1402 -440 0 -440 0 0
1545 0 1545 -638 0 -637 0 -138 -138z m1393 -1427 l0 -1545 670 0 670 0 0
1545 0 1545 550 0 550 0 0 -3660 0 -3660 -550 0 -550 0 0 1600 0 1600 -670 0
-670 0 0 -1600 0 -1600 -545 0 -545 0 0 3660 0 3660 545 0 545 0 0 -1545z
m-1110 -2135 l0 -3660 540 0 c297 0 540 -2 540 -5 0 -3 -56 -61 -125 -130
l-126 -125 -619 0 -620 0 0 3657 0 3658 132 132 133 133 72 0 73 0 0 -3660z
m2430 2135 l0 -1525 -200 0 -200 0 0 1396 0 1395 128 129 127 129 73 1 72 0 0
-1525z m0 -4195 l0 -1600 547 0 548 0 -130 -130 -130 -130 -617 0 -618 0 0
1595 0 1595 -450 0 -450 0 0 135 0 135 650 0 650 0 0 -1600z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
