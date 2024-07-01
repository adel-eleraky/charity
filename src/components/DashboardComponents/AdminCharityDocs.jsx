//todo: update the ui of the popup to make loader fancy and update the swiper better and add other controls in the tool bar

import styles from "./AdminCharityDocs.module.css";

import { useCallback, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPendingRequestCharityById } from "../../rtk/features/user/adminSlice";
import { cloudinaryUrl } from "../../utils/helpers";
import Loader from "../common/Loader";
import Error from "../common/Error";
import { PhotoProvider, PhotoView, PhotoSlider } from "react-photo-view";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

function AdminCharityDocs({ charity, onClosePopup }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  // you can use it anywhere so no prob-drilling
  const { pendingRequestCharity, getPendingRequestCharityByIdStatus, error } =
    useSelector((store) => store.admin);
  useEffect(
    function () {
      if (getPendingRequestCharityByIdStatus === "idle")
        dispatch(getPendingRequestCharityById(charity._id));
    },
    [charity._id, dispatch, getPendingRequestCharityByIdStatus, visible]
  );

  //* === idle because i need it to load only once (it will not change)
  if (
    getPendingRequestCharityByIdStatus === "loading" ||
    getPendingRequestCharityByIdStatus === "idle"
  )
    return <Loader type="mosaic" />;
  if (getPendingRequestCharityByIdStatus === "failed")
    return <Error msg={error} />;
  const docs = Object.values(pendingRequestCharity.charityDocs);
  return (
    <PhotoSlider
      images={docs.map((item) => ({
        src: `${cloudinaryUrl("chDocs")}/${item[0]}`,
        key: item[0],
      }))}
      maskOpacity={0.8}
      visible={visible}
      onClose={() => {
        setVisible(false);
        onClosePopup();
      }}
      index={index}
      onIndexChange={setIndex}
      //* see what you want to do first before you remove this line
      afterClose={() => {}}
      overlayRender={({}) => (
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            scrollbar={{ draggable: true }}
            centeredSlides={true}

            // className={styles.Swiper}
          >
            {docs.map((item, i) => (
              <SwiperSlide key={i}>
                <img
                  onClick={() => setIndex(i)}
                  className={i === index ? styles.active : ""}
                  src={`${cloudinaryUrl("chDocs")}/${item[0]}`}
                  alt="1"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      toolbarRender={({ rotate, onRotate }) => {
        return (
          <svg
            onClick={() => onRotate(rotate + 90)}
            className="PhotoView-Slider__toolbarIcon"
            width="44"
            height="44"
            fill="white"
            viewBox="0 0 768 768"
          >
            <path d="M565.5 202.5l75-75v225h-225l103.5-103.5c-34.5-34.5-82.5-57-135-57-106.5 0-192 85.5-192 192s85.5 192 192 192c84 0 156-52.5 181.5-127.5h66c-28.5 111-127.5 192-247.5 192-141 0-255-115.5-255-256.5s114-256.5 255-256.5c70.5 0 135 28.5 181.5 75z"></path>
          </svg>
        );
      }}
    />
  );
}

export default AdminCharityDocs;
