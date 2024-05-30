import React, { useEffect } from "react";

const KakaoMap = () => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          var infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

          var mapContainer = document.getElementById("kakaoMap"), // 지도를 표시할 div
            mapOption = {
              center: new window.kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
              level: 5, // 지도의 확대 레벨
            };

          // 지도를 생성합니다
          var map = new window.kakao.maps.Map(mapContainer, mapOption);

          // 장소 검색 객체를 생성합니다
          var ps = new window.kakao.maps.services.Places();

          // 키워드로 장소를 검색합니다 (여기서 사용자의 위치를 기준으로 검색)
          ps.keywordSearch("동물병원", placesSearchCB, {
            location: new window.kakao.maps.LatLng(latitude, longitude),
            radius: 5000, // 검색 반경을 설정할 수 있습니다 (단위: 미터)
          });

          // 키워드 검색 완료 시 호출되는 콜백함수입니다
          function placesSearchCB(data, status, pagination) {
            if (status === window.kakao.maps.services.Status.OK) {
              // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기 위해
              // LatLngBounds 객체에 좌표를 추가합니다
              var bounds = new window.kakao.maps.LatLngBounds();

              // 검색 결과를 최대 3개로 제한
              const limitedData = data.slice(0, 3);

              for (var i = 0; i < limitedData.length; i++) {
                displayMarker(limitedData[i]);
                bounds.extend(new window.kakao.maps.LatLng(limitedData[i].y, limitedData[i].x));
              }

              // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
              map.setBounds(bounds);
            }
          }

          function displayMarker(place) {
            // 마커를 생성하고 지도에 표시합니다
            var marker = new window.kakao.maps.Marker({
              map: map,
              position: new window.kakao.maps.LatLng(place.y, place.x),
            });

            // 마커에 클릭이벤트를 등록합니다
            window.kakao.maps.event.addListener(marker, "click", function () {
              // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
              infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + "</div>");
              infowindow.open(map, marker);
            });
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return <div id="kakaoMap" style={{ width: "621px", height: "447px" }}></div>;
};

export default KakaoMap;
