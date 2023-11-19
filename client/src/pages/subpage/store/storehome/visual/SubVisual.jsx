import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export default function SubVisual() {


    // let liFirstRef = useRef(null);
    // let liSecondRef = useRef(null);
    // let liThirdRef = useRef(null);
    let liRef = useRef(null);
    let [listImg, setListImg] = useState(["https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960560152478453.png?w=1920", "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170012982237802200.png?w=1920", "https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169995935837483041.png?w=1920"])
    let ulRef = useRef();



    // let [transition, setTransition] = useState("sub_visual_list_li")
    // gsap.set(imgRef.current, { opacity: 0.8, width: window.innerWidth });
    useEffect(() => {
        // querySelectorAll을 사용 하지 않을 시
        // gsap.set(liFirstRef.current, { width: window.innerWidth, left: -window.innerWidth });
        // gsap.set(liSecondRef.current, { width: window.innerWidth, left: 0 });
        // gsap.set(liThirdRef.current, { width: window.innerWidth, left: window.innerWidth });

        const ulNode = ulRef.current;
        // 부모요소에게 ulRef 주고,
        const liNode = ulNode.querySelectorAll(".sub_visual_list_li");
        // gsap.context(() => {

        //     gsap.set(".sub_visual_list_li", { width: window.innerWidth, left: window.innerWidth })

        // }, ulRef)// 다중요소선택

        gsap.set(liNode[0], { width: window.innerWidth, left: 0 })
        gsap.set(liNode[1], { width: window.innerWidth, left: window.innerWidth })
        gsap.set(liNode[2], { width: window.innerWidth, left: -window.innerWidth })

    }, [])

    let [slide, setSlide] = useState(2);
    let [next, setNext] = useState(0);
    let [prev, setPrev] = useState(1);
    let [isSlide, setIsSlide] = useState(false);
    let [clickPrev, setClickPrev] = useState(false);
    let [clickNext, setClickNext] = useState(false);

    function visualNextSlide() {

        const ulNode = ulRef.current;
        const liNode = ulNode.querySelectorAll(".sub_visual_list_li");

        setIsSlide(false);
        if (isSlide === false) {
            setIsSlide(true);
            setClickNext((n) => n + 1)

            setSlide((slide) => slide + 1);

            if (slide === 2) {
                setSlide(0)
            }

            setPrev((prev) => prev + 1)
            if (prev === 2) {
                setPrev(0)
            }

            setNext((next) => next + 1)
            if (next === 2) {
                setNext(0)
            }

            // gsap.set(liNode[prev], { left: window.innerWidth, onComplete: () => { setIsSlide(true) } })
            // gsap.to(liNode[slide], { left: -window.innerWidth, onComplete: () => { setIsSlide(true) } })
            // gsap.to(liNode[next], { left: 0, onComplete: () => { setIsSlide(true) } })
            // 마우스클릭이벤트 함수가 실행되면 useState를 증가시킴
            // useState가 변경되면 리렌더링이 되는 것은 맞지만
            // 함수 안에서 변경시킨 useState값을 바로 함수 안에서 적용시킬 수 없음



        }




        // if (slide === 0) {
        //     gsap.to(liSecondRef.current, { left: -window.innerWidth })
        //     gsap.to(liThirdRef.current, { left: 0 })
        //     gsap.to(liFirstRef.current, { left: window.innerWidth })
        // }

        // if (slide === 1) {
        //     gsap.to(liFirstRef.current, { left: 0 })
        //     gsap.set(liSecondRef.current, { left: window.innerWidth })
        //     gsap.to(liThirdRef.current, { left: -window.innerWidth })
        // }

        // if (slide === 2) {
        //     gsap.to(liFirstRef.current, { left: -window.innerWidth })
        //     gsap.to(liSecondRef.current, { left: 0 })
        //     gsap.set(liThirdRef.current, { left: window.innerWidth })
        // }


    }







    function visualPrevSlide() {

        // let ctx = gsap.context(() => {

        //     gsap.to(".sub_visual_list_li", { rotation: 360 })

        // }, ulRef)// 다중요소선택

        // console.log(liRef);

        const ulNode = ulRef.current;
        // 부모요소에게 ulRef 주고,
        const liNode = ulNode.querySelectorAll(".sub_visual_list_li");
        // 각 자식요소를 querySelectorAll 을 통해 찾아준다.
        // 그 후 배열 index를 통해 접근
        // querySelectorAll은 click이벤트함수나 콜백function 안에서만 사용가능하고 
        // 전역으로는 사용불가능한 줄 알았더니,
        // useEffect 안에 사용하면 가능함
        // useRef 를 전역으로 선언하고, useEffect안에서 querySelectorAll로 찾아줄 수 있음
        setIsSlide(false);

        if (isSlide === false) {
            //slide가 false일 때 실행할 코드
            setClickPrev((p) => p + 1)

            setIsSlide(true);
            // 빠른 클릭으로 중복될 수 있어 바로 true로 막아줌
            setSlide((slide) => slide - 1);
            if (slide === 0) { // 초기값 0
                setSlide(2)
            }

            setPrev((prev) => prev - 1);
            if (prev === 0) { // 초기값 2
                setPrev(2)
            }

            setNext((next) => next - 1);
            if (next === 0) { // 초기값 1
                setNext(2)
            }

            // gsap.set(liNode[prev], { left: -window.innerWidth, onComplete: () => { setIsSlide(true) } })
            // gsap.to(liNode[slide], { left: 0, onComplete: () => { setIsSlide(true) } })
            // gsap.to(liNode[next], { left: window.innerWidth, onComplete: () => { setIsSlide(true) } })
            // 애니메이션이 끝난 후 isSlide를 true로 바꿔주어 코드가 중복 실행을 못하게끔 막아줌  
        }

        // if (slide === 1) {
        //     gsap.to(liFirstRef.current, { left: -window.innerWidth })
        //     gsap.to(liSecondRef.current, { left: 0 })
        //     gsap.to(liThirdRef.current, { left: window.innerWidth })
        // }

        // if (slide === 2) {
        //     gsap.to(liFirstRef.current, { left: window.innerWidth })
        //     gsap.set(liSecondRef.current, { left: -window.innerWidth })
        //     gsap.to(liThirdRef.current, { left: 0 })
        // }

        // if (slide === 0) {
        //     gsap.to(liSecondRef.current, { left: window.innerWidth })
        //     gsap.to(liFirstRef.current, { left: 0 })
        //     gsap.set(liThirdRef.current, { left: -window.innerWidth })
        // }

    }

    useEffect(() => {

        const ulNode = ulRef.current;
        const liNode = ulNode.querySelectorAll(".sub_visual_list_li");

        gsap.set(liNode[prev], { left: window.innerWidth, onComplete: () => { setIsSlide(true) } })
        gsap.to(liNode[slide], { left: -window.innerWidth, onComplete: () => { setIsSlide(true) } })
        gsap.to(liNode[next], { left: 0, onComplete: () => { setIsSlide(true) } })
    }, [clickNext])// 슬라이드가 변경될 때마다 실행




    useEffect(() => {

        const ulNode = ulRef.current;
        const liNode = ulNode.querySelectorAll(".sub_visual_list_li");

        gsap.set(liNode[prev], { left: -window.innerWidth, onComplete: () => { setIsSlide(true) } })
        gsap.to(liNode[slide], { left: 0, onComplete: () => { setIsSlide(true) } })
        gsap.to(liNode[next], { left: window.innerWidth, onComplete: () => { setIsSlide(true) } })

    }, [clickPrev])

    console.log("prev = " + prev);
    console.log("slide = " + slide);
    console.log("next = " + next);

    //  App Component가 호출되고 나서 
    //  return에 적히는 html이 생기기 때문에
    //  document.querySelector로 찾을 수가 없다.
    //  React Component 안쪽에서는
    //  document.querySelector문을 가급적 쓰면 안됨.
    //  현재 React에서 관리되고 있는 가상돔을 
    //  제어하는 것이 아닌 제어가 불가능한 리얼돔을 가져오기 때문
    //  DOM을 계속 변경 시키기 때문에 원하는 DOM을 선택하지 
    //  않을 수도 있기 떄문에 권장하지는 않고 useRef를 쓰기를 권장함

    return (
        <>
            <section className="sub_visual_section">
                <ul className="sub_visual_list" ref={ulRef}>
                    {

                        listImg.map((lst) => (


                            <li className="sub_visual_list_li" ref={liRef}  >
                                <Link to="#" className="sub_visual_list_link">
                                    <img className="sub_visual_list_img" src={lst} />
                                </Link>
                            </li>

                        ))
                    }
                    {/* <li className="sub_visual_list_li" ref={liRef}  >
                        <Link to="#" className="sub_visual_list_link">
                            <img ref={imgRef} className="sub_visual_list_img" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170012982237802200.png?w=1920" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170012982237802200.png?w=2880 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170012982237802200.png?w=3840 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170012982237802200.png?w=5760 3x" class="css-1jjjg2j" />
                        </Link>
                    </li>
                    <li className="sub_visual_list_li" ref={liRef}  >
                        <Link to="#" className="sub_visual_list_link">
                            <img className="sub_visual_list_img" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960548689735912.png?w=1920" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960548689735912.png?w=2880 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960548689735912.png?w=3840 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960548689735912.png?w=5760 3x" class="css-1jjjg2j" />
                        </Link>
                    </li>
                    <li className="sub_visual_list_li" ref={liRef}>
                        <Link to="#" className="sub_visual_list_link">
                            <img className="sub_visual_list_img" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960534665677222.png?w=1920" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960534665677222.png?w=2880 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960534665677222.png?w=3840 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960534665677222.png?w=5760 3x" class="css-1jjjg2j" />
                        </Link>
                    </li> */}
                </ul>
                <div className="sub_visual_inner inner">
                    <div className="sub_visual_count_wrap">
                        <p className="sub_visual_count_p">
                            <span className="sub_visual_count_current_span">
                                {"0" + (next + 1)}
                            </span>
                            <span className="sub_visual_count_span">
                                / 03
                            </span>
                        </p>
                        <button className="sub_visual_prev_btn" onClick={visualPrevSlide}>이전</button>
                        <button className="sub_visual_next_btn" onClick={() => {
                            visualNextSlide()
                        }}>다음</button>
                    </div>

                </div>
            </section >
            {/*             <section className="sub_visual_section">
                <ul className="sub_visual_list" ref={ulRef}>
                    <li className="sub_visual_list_li" ref={liFirstRef}  >
                        <Link to="#" className="sub_visual_list_link">
                            <img ref={imgRef} className="sub_visual_list_img" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170012982237802200.png?w=1920" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170012982237802200.png?w=2880 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170012982237802200.png?w=3840 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170012982237802200.png?w=5760 3x" class="css-1jjjg2j" />
                        </Link>
                    </li>
                    <li className="sub_visual_list_li" ref={liSecondRef}  >
                        <Link to="#" className="sub_visual_list_link">
                            <img className="sub_visual_list_img" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960548689735912.png?w=1920" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960548689735912.png?w=2880 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960548689735912.png?w=3840 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960548689735912.png?w=5760 3x" class="css-1jjjg2j" />
                        </Link>
                    </li>
                    <li className="sub_visual_list_li" ref={liThirdRef}>
                        <Link to="#" className="sub_visual_list_link">
                            <img className="sub_visual_list_img" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960534665677222.png?w=1920" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960534665677222.png?w=2880 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960534665677222.png?w=3840 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960534665677222.png?w=5760 3x" class="css-1jjjg2j" />
                        </Link>
                    </li>
                </ul>
                <button className="sub_visual_prev_btn" onClick={visualPrevSlide}>이전</button>
                <button className="sub_visual_next_btn" onClick={visualNextSlide}>다음</button>
            </section > */}
        </>
    );

}