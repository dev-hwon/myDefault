<div id="comp_enuri" class="main_row">
	<div class="bg_bar plx plx_type_item" data-plxtype="item" data-plxspeed="0.3" ></div>
	<div class="container">
		<h3 class="title">써머스플랫폼/에누리닷컴</h3>
		<div class="summary">
			<ul class="list-hyphen">
				<li>쇼핑몰 가격비교 솔루션(에누리닷컴)으로 페이지 전반적인 부분에 참여함.</li>
				<li>이미 서비스가 진행중인 페이지이기에 코드의 최신화 및 모듈화를 통한 페이지 스피드 향상에 목표를 두고 작업함.</li>
			</ul>
		</div>
		프로젝트 : 마이e클럽 (마이페이지)
		- 참여도 : 80%
		- 마이페이지에 대한 전반적인 이해를 바탕으로 웹/모바일 작업을 진행.
		- 기존에 불편했던 UI에 대해 새로운 UI제안 및 남아있는 영역과 겹치는 기능 제거.

		프로젝트 : 스마트파인더 (상세검색)
		- 참여도 : 80%
		- 해당영역에 대한 코드공통화, 이후 기능확대에 대한 확장성 고려하여 작업되었고 재사용이 가능한 코드 작성.
		- 스프라이트이미지 작업을통한 속도개선
		- 기능의 작동을 위해 개발자와 협업을 통한 전반적인 조건설정을 진행.
		- 직접 사용해보고 UI개선을 위한 디자인 수정

		프로모션페이지 개선
		- 참여도 : 100%
		- 페이지모듈화를 통해 작업시간단축(3일 -> 1일)

		에누리닷컴 상품리스트페이지 DOM구조 변경
		- 참여도 : 90%
		- 해당영역의 수정을 통해 간단하게 반응형으로 구조변경이 가능( float구조 -≫ flex구조)
		- 새로운영역 추가에 대한 확장성 향상.
		- 필요없는 속성 및 내용 정리로 페이지 로드스피드 개선.

		프로젝트 : MCSS 최저가 추이 웹버전 (2021-05-06 ~ 2021-05-14)
		- 참여도 : 100%
		-
		<div class="pf_swiper">
			<div class="col_wrap">
				<div class="col col_7">
					<div class="pf_frame_pc">
						<div class="pf_swiper_pc swiper-container">
							<div class="swiper-wrapper">
								<div class="swiper-slide"><img src="./images/q1.jpg"></div>
								<div class="swiper-slide"><img src="./images/q2.jpg"></div>
								<div class="swiper-slide"><img src="./images/q3.jpg"></div>
								<div class="swiper-slide"><img src="./images/q4.jpg"></div>
								<div class="swiper-slide"><img src="./images/q5.jpg"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col col_1"></div>
				<div class="col col_3">
					<div class="pf_frame_mobile">
						<div class="pf_swiper_mobile swiper-container">
							<div class="swiper-wrapper">
								<div class="swiper-slide"><img src="./images/a1.jpg"></div>
								<div class="swiper-slide"><img src="./images/a2.jpg"></div>
								<div class="swiper-slide"><img src="./images/a3.jpg"></div>
								<div class="swiper-slide"><img src="./images/a4.jpg"></div>
								<div class="swiper-slide"><img src="./images/a5.jpg"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<script>
                let pfSwiperSet = {
                    watchActiveIndex: true,
                    autoHeight : true,
                    autoplay:3000,
                    autoplayDisableOnInteraction : false,
                    speed : 800,
                    loop : true,
                    loopAdditionalSlides : 1,
                    spaceBetween : 0,
                }
                var pfPcSwiper = new Swiper('.pf_swiper_pc', pfSwiperSet);
                var pfMobileSwiper = new Swiper('.pf_swiper_mobile', pfSwiperSet);
                //     watchActiveIndex: true,
                //     autoHeight : true,
                //     autoplay:3000,
                //     autoplayDisableOnInteraction : false,
                //     speed : 800,
                //     loop : true,
                //     // loopAdditionalSlides : 1,
                //     spaceBetween : 0,
                //     onTransitionEnd  : function(e){
                //     var _idx = e.realIndex;
                //     $txtIndexlNum.html(_idx+1);
                // }
			</script>
		</div>
	</div>
</div>