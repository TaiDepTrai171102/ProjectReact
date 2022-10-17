import React from 'react'
import Footer from '../../../assets/logo.jfif'
import LogoFooter from '../../..//assets/logo.174bdfd.svg'
import active from '../../..//assets/active.4cba64f.png'

export default function FooterCbn() {
	return (
		<>
			<div className="footer">
				<img src={Footer} alt="" />
				<div className="footer__logo">
				
				</div>
				<div className="footer__content">
					<div className="list__content">
						<div className="hotline">
							<b>- Hotline</b>
							<ul>
								<li>Đặt Hàng: 1800 6939 (07:00 - 20:30)</li>
								<li>Hỗ trợ: 028.71.087088 (07:00 - 21:00)</li>
							</ul>
						</div>
						<div className="address">
							<b>- Thông tin</b>
							<ul>
							<li ><strong style={{color: 'yellow'}}>♦ Địa Chỉ Giao Dịch Trực Tiếp Tại Đà Nẵng:</strong><a href="#" title="68 Nguyễn Chí Thanh - Đống Đa - Hà Nội">47 An Hải 21 - Sơn Trà - Đà Nẵng</a></li>
        					<li ><strong style={{color: 'yellow'}}>♦ Hotline:</strong><a href="tel:Mobi: 07.9898.6666 - Viettel: 034.637.2233">07 9898 6666 - 034 637 2233</a></li>
        					<li ><strong style={{color: 'yellow'}}>♦ FaceBook:</strong><a href="https://www.facebook.com/shopchuongcfhn" title="Chương Trần">Phạm Minh Tài</a></li>
        					<li ><strong style={{color: 'yellow'}}>♦ Email:</strong><a href="mailto:Shopchuongcf@gmail.com" title="Shopchuongcf@gmail.com">phamtin454545@gmail.com</a></li>
					
							</ul>
						</div>
					</div>
				</div>
				<div className="footer__active">
					<span>Copyright © 2021 The Coffee House. All rights reserved.</span>
					<img src={active} alt="" />
				</div>
			</div>
		</>
	)
}