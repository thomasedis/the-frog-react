import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
export default function About() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="gird about-wrapper">
            <div className="grid wide">
                <div className="about">
                    <div className="shop-top__title">
                        <h1>ABOUT US</h1>
                    </div>
                    <div className="about__content">
                        <p>
                                 Nhận thấy được nhu cầu đang phát triển của thị trường Streetwear, chúng tôi đã cho ra đời "The Frog" trên thị trường thời trang của Việt Nam, "The Frog" mang một phong cách riêng, đưa mọi người đến những đột phá, những phá cách trong ăn mặt thường ngày. Mỗi collections của "The Frog" đều mang những thông điệp khác nhau, và chất liệu phù hợp với nhiều dạng form người. Hãy cùng đón chờ và ủng hộ các collections mới của những chú ếch "The Frog" các bạn nhé !
                        </p>
                    </div>
                    <div className="about__fanpage">
                        <h2>FANPAGE</h2>
                        <div class="fb-page" data-href="https://www.facebook.com/thefrog-streetwear" data-tabs="none" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/thefrog-streetwear" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/thefrog-streetwear">The Frog</a></blockquote></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
