import {Link} from 'react-scroll';

function Navbar(){

    const barra = () =>{
        console.log("DANDO CLICK");
        const sideMenu = document.querySelector("#nav-lat");
        const menuBtn = document.querySelector('#menu-btn');
        
        menuBtn.addEventListener("click", () =>{
            sideMenu.style.display = 'flex';
        }); 
    }

    const close = () => {
        const closeBtn = document.querySelector("#close-btn");
        const sideMenu = document.querySelector("#nav-lat");

        
        closeBtn.addEventListener('click', () =>{
            sideMenu.style.display = 'none';
        });
    }

    const mensaje = () => {
        alert("DISTE CLICK");
    }

    return(
        <>
            <div className="navmain">
                <div className="nav-top">
                    <div className="container">
                        <div className="contact">
                            <div className="phone">
                                <h3>DIÓCESIS DE CHILPANCINGO - CHILAPA</h3>
                                <p>Pastoral Vocacional Diocesana</p>
                            </div>
                            <div className="icons">
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path id="twiter" d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"/></svg>
                                </a>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path id="face" d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/></svg>
                                </a>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path id="insta" d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"/><circle id="insta2" cx="11.994" cy="11.979" r="3.003"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar">
                    <div className="nav container">
                        <div id='nav-lat' className="nav-lat">
                            <div className="logo">
                                <h1>LOGOTIPO</h1>
                                <button onClick={close} className="close" id="close-btn">
                                    <img src="src/assets/x-circle-solid-36.png" alt="" />
                                </button>
                            </div>
                            <div className="enlaces">
                                <li class="nav__listitem title_li">Inicio
                                    <ul class="nav__listitemdrop">
                                        <li onClick={mensaje}>Seminario diosesano de la inmaculada</li>
                                        <li href="www.google.com.mx">Vida consagrada</li>
                                        <li>Vida laica: matrimonios</li>
                                        <li>Vida laica: solteros</li>
                                        <li>Vida laica: viudos</li>
                                    </ul>
                                </li>
                                <li class="nav__listitem title_li">Quienes somos
                                    <ul class="nav__listitemdrop">
                                        <li>Diosesis de chilpanciongo-chilapa</li>
                                        <li>Decanatos</li>
                                        <li>Parroquias</li>
                                        <li>Grupos de acompañamiento vocacional</li>
                                    </ul>
                                </li>
                                <li class="nav__listitem title_li">Calendario
                                    <ul class="nav__listitemdrop">
                                        <li>Pastoral juvenil</li>
                                        <li>Pastoral de adolescentes</li>
                                        <li>Pastoral vocacional diosesana</li>
                                        <li>Seminario</li>
                                    </ul>
                                </li>
                            </div>
                        </div>
                        <div className='nav-responsive'>
                            <button onClick={barra} id='menu-btn'>
                                <img id='menu' src="src/assets/menu-regular-36.png" alt="" />
                            </button>
                            {/* <button className="contacto">
                                <Link to="contactanos" spy={true} smooth={true} offset={-100} duration={500} href="#contacto">
                                    <h3>Registro y Contacto</h3>
                                </Link>
                            </button> */}
                            <li class="nav__listitem registro-contacto">
                                <div>
                                    Registro y Contacto
                                    <ul class="nav__listitemdrop">
                                        <li>Pastoral vocacional diosesana</li>
                                        <li>Seminario</li>
                                    </ul>
                                </div>
                            </li>
                        </div>
                    </div>
                </nav>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit saepe nisi animi corrupti, eveniet dolor velit qui optio officia debitis inventore ratione natus corporis omnis, vitae iste magnam dolorum soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iusto sint deleniti et, autem ex nobis modi perspiciatis, eligendi ut fuga soluta atque repellendus eius? Ipsam minima deleniti debitis ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veniam non numquam voluptatum nulla facere, velit dolorum soluta officia excepturi illum voluptatem nobis tenetur ex? Voluptatem ipsa possimus assumenda aliquam.
                Nisi consequuntur a consectetur culpa necessitatibus, repudiandae pariatur modi inventore ab minima velit tempora, debitis est animi illum quasi! Sit error reprehenderit earum itaque vero blanditiis sint et placeat a?
                Corporis est id quis laboriosam suscipit magni distinctio deleniti! Architecto quidem excepturi voluptatibus, porro vel nesciunt non quibusdam nisi omnis rerum saepe neque, est temporibus? Praesentium harum in sit voluptatibus?
                Aliquam fugiat quo ad architecto sed explicabo, tempora suscipit aliquid mollitia natus corporis voluptatibus praesentium at quis temporibus odio odit ipsum libero vel nam maxime fuga expedita. Atque, numquam ipsam!
                Est perferendis cum magni possimus magnam eligendi sapiente similique quaerat ducimus. Sit assumenda minus similique saepe cupiditate, maxime voluptas porro minima recusandae nisi, enim consequuntur aliquid tenetur odit, harum necessitatibus?
                Iure voluptates explicabo animi. Quaerat ducimus soluta modi ratione, deserunt necessitatibus consectetur odio nam alias sint officia reprehenderit explicabo aliquid recusandae omnis, odit vel nemo amet, aut placeat a culpa?
                Aliquid fugit harum, a minima sed iste sequi non dolorum porro eos, earum placeat ipsa officiis eveniet omnis nisi quis obcaecati minus tenetur voluptatibus. Eius culpa eum impedit ad animi!
                Molestiae sit iste quam consequuntur dolorum nobis ea quis id aut saepe ab, numquam laudantium delectus blanditiis, qui necessitatibus hic esse! Cum quis ipsum nulla veritatis. Temporibus, tempora. Laudantium, sit!
                Nam, optio soluta ducimus rem deleniti quo sequi eos quia eaque velit doloremque, aliquid assumenda autem ipsa iste earum non. Cumque asperiores aperiam odio magni voluptates fuga eum, consequuntur accusantium?
                Placeat exercitationem ipsum porro veniam ad fugiat nihil repellendus, tenetur, consequuntur soluta beatae harum veritatis doloremque facilis neque molestiae aliquam perferendis quo eaque ex, error officia quibusdam. Recusandae, ratione voluptates.
                Aliquam, ipsa! Dolore a earum corporis consequatur, dolorum quod veritatis aspernatur, explicabo provident, quisquam ipsa pariatur ducimus rerum veniam ratione? Quaerat quod beatae quas saepe repellat molestias necessitatibus asperiores ipsam?
                Magnam optio expedita tempore? Neque architecto ipsa itaque enim, libero commodi officiis autem pariatur distinctio vero inventore voluptates velit cumque aperiam aliquam, consequuntur veniam optio deleniti fugiat, vel asperiores id!
                Voluptates, dolores pariatur? Corporis eaque ullam ex! Expedita labore consequuntur id aut laboriosam impedit, quisquam sit error fugiat suscipit magni molestiae iure? Eos illo ea consequatur laborum exercitationem! Vero, quisquam.
                Aperiam vel soluta quas fugit. Atque aut voluptatibus repudiandae dicta deserunt exercitationem nesciunt assumenda ad earum provident qui quod dolores omnis quam alias, dolorum reprehenderit magnam corporis neque illo officiis.
                Consequuntur officiis odio quam vitae illum, reprehenderit debitis, esse doloribus culpa eos nihil necessitatibus voluptatum accusamus? A consequatur reprehenderit rem quos et temporibus! Recusandae iusto quis quos architecto totam! Quia?
                Mollitia rem eaque aliquam quia delectus officiis exercitationem neque quam, omnis, iusto tempore optio asperiores facilis libero. Dolores quis delectus deleniti magnam aliquid rerum iste ad. Quam voluptatum maiores architecto.
                Cupiditate dolorem quos omnis in tempore doloribus, natus architecto vero aut eum fugiat earum temporibus assumenda molestiae? Sint, autem. Vitae debitis sit porro itaque architecto sint molestiae repellendus dolore expedita.
                Nihil temporibus aperiam accusamus repellendus eligendi sequi ab quibusdam aspernatur, explicabo laudantium minima libero, enim nostrum laborum. Repellendus, debitis totam iusto cumque praesentium rerum corporis, et dignissimos, soluta doloribus ullam?
                Veritatis obcaecati beatae vel ea ducimus amet dolorum iure blanditiis, expedita velit exercitationem voluptatum vitae magni quae eum corrupti hic modi eligendi perferendis eaque facilis magnam. Voluptatibus reiciendis dignissimos nesciunt?
                Inventore voluptate quam est consequuntur, et ratione quo, quidem voluptatibus expedita id eius placeat sit sunt ipsam magni delectus. Soluta quas architecto sunt ab excepturi dolorem cumque dicta provident vitae!
                Quos qui porro in animi non nisi, at laudantium quasi sequi doloribus ullam eaque ratione ipsum. Rerum dolor cum quibusdam sapiente iste fugit, recusandae alias voluptate vitae inventore incidunt eum?
                Optio incidunt iusto cumque harum soluta voluptates magnam officiis vero dolorum unde, dolore, esse reiciendis maiores cum natus accusamus quis corrupti? Tempora quas nostrum porro eum in assumenda quia molestiae!
                Numquam, exercitationem culpa obcaecati quidem praesentium rerum dolorem fuga vel dolores repellendus neque voluptates iste pariatur quisquam eligendi repudiandae eaque esse expedita ipsum tenetur doloremque eius aspernatur. Commodi, et facilis.
                Deleniti blanditiis iusto ad nisi recusandae nam aliquid repellat quaerat perferendis nostrum dolore animi ullam cum impedit maxime, esse, hic quod earum quidem mollitia illum porro harum facilis! Blanditiis, dolorem!
                Quam reprehenderit nostrum itaque hic sint fugiat ipsum totam necessitatibus blanditiis quos sapiente soluta nihil tempore, provident perferendis! Dolorum vero debitis rem minus libero explicabo beatae facilis excepturi tenetur numquam.
                Iusto odio similique, soluta ipsa maxime laudantium asperiores ab inventore adipisci harum dolores blanditiis quaerat, dicta quo necessitatibus libero minus. Alias fugiat facilis repellat vel dolore temporibus cumque magni laborum.
                Cumque dignissimos quis nisi minima excepturi. Nobis, nesciunt? Ut, quos minima similique perspiciatis, facere fugiat nulla minus fugit illum ipsa voluptatum nobis necessitatibus nam. Mollitia enim reiciendis fugiat non quisquam!
                Veritatis aliquid facere ipsa doloribus, id adipisci culpa eveniet cupiditate minus repellendus reiciendis vitae vel explicabo consectetur expedita maxime. Impedit repellat aliquid molestias pariatur dolore doloremque laborum perferendis! Excepturi, perspiciatis!
                Consectetur quam eius dignissimos quisquam. Explicabo cumque aliquam laborum neque laboriosam suscipit ut. Et facilis rerum, molestias, nisi laudantium facere iure ab cum perspiciatis nobis, quisquam quos pariatur non esse?
                Quaerat eos quasi velit vel accusamus veniam numquam deserunt. Sit asperiores nesciunt tempore natus dicta necessitatibus ea a. Molestiae eos cum voluptate ipsam officia. Quibusdam officiis sint ex perspiciatis dolores!
                Aliquid id sit sapiente quae in placeat omnis perferendis velit quisquam tempore blanditiis fuga deserunt deleniti recusandae, sequi, iste corrupti facilis provident tempora illo ullam cumque iusto aut optio! Soluta!
                Facere, libero quos. Doloribus voluptatibus iusto, rem fuga molestiae cupiditate error nesciunt nisi esse. Numquam perferendis obcaecati ex quod praesentium totam officiis fuga, nemo, molestias nisi alias quis vitae voluptatum!
                Ipsum, assumenda? Molestiae atque quos soluta rerum voluptatem ea officiis vero odio similique voluptatum accusamus nulla sed amet aspernatur quasi culpa laudantium maxime sequi, corporis fugit quisquam eum id minus?
                Nesciunt saepe qui consequatur tempora optio a itaque laborum obcaecati? Ex, eaque? Eveniet doloribus unde officiis facilis, perspiciatis dicta recusandae at vitae tempore officia debitis ab. Excepturi sunt est nam.
                Magni quis ut sit doloribus, sunt tempore atque pariatur in eaque harum soluta incidunt id illo quisquam? Libero quam expedita, temporibus cum autem omnis nostrum, unde doloribus nobis nulla commodi.
                Earum nemo quasi, neque debitis iure esse, fuga sit incidunt aut, nostrum molestias consectetur odio laboriosam? Tenetur neque numquam consequatur molestias accusantium a quis deserunt aut beatae quasi, magni similique.
                Eveniet libero similique obcaecati magni temporibus consequatur vel modi ad officiis nostrum, magnam tempora hic quasi doloremque debitis sequi fuga quam quo! At, eligendi aliquid. Rem ad eius aliquid libero.
                Molestias maxime, commodi eveniet nemo voluptas, officia explicabo tenetur laborum corporis, voluptates excepturi recusandae similique ipsam ducimus cum laudantium aperiam sequi! Incidunt, deserunt. Maxime earum voluptates quia quod tempora officia?
                Quisquam, numquam itaque. Commodi asperiores sint nisi neque laborum aliquam quidem iure. Soluta quidem repudiandae porro harum at saepe molestiae, non obcaecati, sequi laborum praesentium a assumenda quod? Veritatis, blanditiis?
                Vel tempore sit rem laudantium placeat sequi dolorum perferendis accusamus perspiciatis provident impedit rerum ut laborum cupiditate, quidem vero vitae aspernatur numquam optio, earum eum. Pariatur impedit maxime modi temporibus.
                Officiis, ut dolore id sapiente repellendus ipsum dolores doloremque nam aperiam, cupiditate amet soluta? Voluptatibus magni similique et suscipit, vel atque enim placeat repudiandae vitae a. Aliquid laboriosam impedit praesentium?
                Ea eum quidem distinctio magni soluta beatae fugiat obcaecati. Enim amet illum mollitia blanditiis sed voluptatem animi, asperiores assumenda delectus optio, molestiae cum eum eaque facilis, consequatur error labore voluptate!
                Vel atque ipsum libero doloribus, eos aperiam impedit reprehenderit quisquam in cupiditate, nobis voluptatem culpa accusantium alias, inventore quis sed. Cupiditate vero voluptates quibusdam consectetur? Magni officiis incidunt nobis repellat.
                Expedita ut ullam tenetur nemo earum sed odit tempora aliquam vitae voluptatum repellendus, voluptatem excepturi dolorum, numquam dolores ipsum laborum iusto ex nam, autem sunt labore at. Cum, dolorum odio.
                Enim veritatis voluptatem quam perspiciatis asperiores nesciunt excepturi esse eaque facere eligendi odit aliquid doloribus corrupti, quas non tempora! Repudiandae facilis fugiat nisi quas quisquam. Nulla voluptas nam minus dignissimos?
                Optio, sunt ea! Dolorem quas repellendus a omnis voluptatem in dolor sequi. Veniam, culpa nemo quo tempora laudantium consequatur cumque, architecto neque vero esse temporibus quaerat eligendi harum, sed dolore.
                Necessitatibus exercitationem et dignissimos laudantium molestiae! Repellendus quos totam nam nisi molestias maiores illum, debitis facere? Quo alias neque asperiores consequatur eum veniam laborum qui enim sequi repudiandae. Reiciendis, perspiciatis?
                A quisquam eos sequi nostrum vel exercitationem? In, voluptates. Commodi quas architecto fugit! Nobis neque temporibus fugiat? Qui, quos deserunt dolorem sit aut placeat, animi veniam, natus esse laborum nostrum.
                Praesentium laborum non modi quidem in mollitia perspiciatis! Enim, reiciendis facere eligendi dolorum voluptate culpa repellat maiores soluta illum repudiandae nulla porro odit, aspernatur laudantium mollitia sunt asperiores eaque in.
                Eligendi in ipsum esse commodi doloremque accusantium quas nisi, saepe vel est distinctio iure minus inventore expedita mollitia voluptas aperiam non consequuntur doloribus quod. Quos enim nam eos! Hic, quasi.
                Nisi reiciendis nihil vero voluptas aliquam sunt magnam numquam doloribus qui officia quos, assumenda, voluptatum eveniet hic, amet dolore sit sint. Dolorum quam, commodi nemo rerum cupiditate similique possimus earum?
                Provident, excepturi. Tenetur quas odit ex impedit velit temporibus neque atque asperiores, aliquid, nam veritatis nulla tempore hic maxime aperiam nobis placeat. Magni doloremque autem porro fugiat voluptates vel placeat.
                Voluptate, delectus quod beatae aliquid iste obcaecati necessitatibus quos temporibus debitis quo cum odit excepturi nisi fugiat ullam cupiditate odio sint? Ratione officia obcaecati ea nemo, deserunt ex voluptate dolores!
                Quaerat autem veritatis voluptatem voluptas vero eius, laborum quia molestiae aliquid. Impedit numquam quam ullam adipisci reprehenderit perspiciatis, ipsam vitae, veniam sequi deserunt exercitationem necessitatibus minima eos voluptatibus accusamus itaque!
                Et, vero. Tenetur qui recusandae assumenda. Doloremque cupiditate ipsa beatae voluptate commodi minus laborum eos quidem. Rerum at numquam dolores beatae, vero magni culpa delectus est deleniti veritatis error nemo!
                Rerum saepe quaerat ullam voluptate nisi at? Provident, iure. Delectus unde assumenda repudiandae recusandae? Sed fuga maxime quod vitae quas. Corporis quidem qui blanditiis distinctio in veniam tempora necessitatibus? Ipsa!
                Alias, minus tenetur architecto reiciendis distinctio ad sed optio id fugiat eligendi debitis, similique corporis voluptatum nam. Fugiat eveniet, veniam molestiae, illo quo suscipit incidunt sequi distinctio, rerum deleniti perspiciatis.
                Aliquam officiis reiciendis et consequatur voluptatibus. Reprehenderit libero culpa beatae eos velit numquam eligendi quasi, placeat pariatur accusamus veniam odio? Laudantium saepe deserunt repellat quis tenetur assumenda eius ipsa eligendi.
                Sint hic aliquam velit ad, corrupti quibusdam libero numquam iste quam, non sequi illo, modi laborum dolorem? Quisquam laborum reiciendis maiores dolorum ut beatae, a expedita hic est, aspernatur quod?
                Assumenda reiciendis molestiae debitis autem quidem harum ex corporis ducimus et blanditiis dolor, non aspernatur, maiores aliquam. Ex tempora adipisci pariatur facilis obcaecati vitae, voluptas ad iure exercitationem nobis ipsa.
                Nesciunt saepe cupiditate quisquam tempore. Voluptatum reprehenderit quasi ea amet mollitia beatae ipsa sequi earum assumenda, a architecto eos ullam, nobis molestias corrupti excepturi voluptatem voluptatibus fugit, accusamus et officiis?
                Distinctio corporis quisquam impedit hic harum modi exercitationem sapiente molestias obcaecati itaque officia enim, vero magnam incidunt soluta numquam at delectus ipsam quae dolorum repellat quia cum? Tempore, aspernatur perspiciatis!
                Hic illo tenetur minima ducimus unde totam sunt doloribus dolores cumque delectus officia esse excepturi facilis, aperiam, placeat eligendi molestiae sapiente ratione optio! Distinctio atque blanditiis, voluptates cupiditate laborum dignissimos.
                Aut, rerum! Sapiente sequi assumenda quia vitae velit voluptates rerum molestiae neque laudantium cum autem odio suscipit, deserunt iure aut fugit, quos eius, obcaecati enim ducimus exercitationem sunt animi quibusdam!
                Laboriosam odio ducimus deserunt, incidunt iure voluptates cum non quod doloribus illo unde quas facilis dolor consequuntur quia eligendi atque accusantium error ipsum. Alias, repudiandae dignissimos. Ea minus eveniet fugiat?
                In nemo ex odio consectetur provident. Deleniti ex quas illum iure nulla, reiciendis nesciunt minima mollitia ipsum, nisi asperiores? Quam debitis doloribus vitae hic tempora dolore ullam libero unde itaque.
                Eligendi libero, harum doloremque modi, totam facere iste molestias quod quam tempora, consequuntur culpa expedita neque magni nesciunt error! Quia perferendis magni culpa mollitia. Quisquam beatae perferendis mollitia sed? Excepturi?
                Laudantium quaerat sit facere necessitatibus modi, et assumenda tempora labore asperiores magnam facilis porro? Nisi odio similique hic est ad amet incidunt! Cum dolor ducimus ipsum nihil nulla labore eum.
                Eligendi rerum numquam nihil, necessitatibus laborum ea ipsa placeat modi aliquid earum. Maxime, cum similique incidunt aliquam perspiciatis ullam magni a voluptatibus nihil dolore vel, ipsa velit odit accusantium nobis.
                Facere nesciunt esse dolor eaque maxime? Porro voluptatibus doloremque fugit aliquam cupiditate sequi quis labore error. Impedit illo possimus consequatur qui adipisci? Omnis, eos. Nesciunt voluptate ea exercitationem nam cum?
                Sunt consectetur ipsam culpa deleniti eaque natus optio vero? Debitis nostrum exercitationem explicabo iste tempora, modi et neque dignissimos? Non perspiciatis, quasi deleniti placeat adipisci ex cupiditate saepe. Odit, deleniti.
                Libero non impedit facilis esse incidunt nihil cumque. Quidem id ipsum molestiae ipsam temporibus eos at sint iste hic mollitia nam laboriosam omnis sequi excepturi, voluptatibus dicta deleniti ab tempore!
                Quis, sunt nam explicabo beatae est sed fuga molestiae animi architecto asperiores accusantium blanditiis, voluptatem tempora provident id aliquam consequatur fugit, ut eius odit reprehenderit? Dolor ipsum officia provident aliquam.
                Enim odit ea temporibus? Possimus eius nulla architecto autem sed, veniam quia, cumque dolorum est voluptatibus ad voluptatem neque maxime omnis soluta vel voluptate corrupti, ipsum exercitationem aut a enim!
                Cumque nemo mollitia aspernatur molestias tempora quis minus neque dolores, exercitationem delectus quidem animi iusto! Inventore fugit enim animi magni consequuntur, voluptatum tenetur similique tempora blanditiis. Minus totam at odio.
                Aliquid magni debitis earum facilis nemo aspernatur culpa vero quibusdam illo. Eaque aperiam esse optio id totam qui suscipit, hic tempore? Accusantium expedita sed sapiente in iure itaque debitis ipsam?
                Quidem rem cum eos sequi inventore unde tempore non vel id consequatur doloremque, exercitationem, voluptatum nisi sint? Suscipit sunt saepe placeat. Eveniet eius rem harum explicabo excepturi recusandae assumenda quam?
                Soluta iusto porro nihil est velit vero eveniet. Inventore quod quos minima neque sint asperiores magnam dicta adipisci? Expedita vitae earum ad error voluptatibus quam nisi quaerat dolores, quis quibusdam!
                Error quam, ipsam explicabo suscipit fuga dolorum neque aut laborum perferendis reprehenderit ex cumque in reiciendis recusandae optio facere dignissimos quae quo cupiditate itaque. Expedita consequuntur quod dolores voluptatem alias!
                Quis placeat culpa accusamus praesentium maxime mollitia quibusdam distinctio dolorum quo vel, dolor illum et beatae expedita autem. Natus sint molestiae, cumque dolorum neque vitae vel harum vero quas atque?
                Consequatur reiciendis non, dolore numquam atque error, nesciunt sit voluptas sapiente eum aut! Eos consequuntur suscipit nesciunt consequatur illum aliquid blanditiis distinctio deleniti? Non alias voluptates quisquam. Saepe, placeat voluptatum.
                Eius pariatur accusamus iste atque adipisci libero tempore dolores ullam! Possimus quo enim dolorum soluta voluptatem repudiandae maxime incidunt ipsam officiis obcaecati, ad perferendis deleniti reiciendis laudantium accusamus quidem debitis!
                Pariatur fugit omnis et vero quis velit obcaecati dicta in cumque autem quibusdam sunt ipsum quasi molestiae at eum dolore alias voluptas nisi, excepturi deleniti accusantium minima distinctio perspiciatis. Officia.
                Assumenda eligendi voluptatibus illo voluptatem accusantium fuga aperiam exercitationem culpa itaque, hic neque consequuntur nihil incidunt corrupti maiores iste? Soluta necessitatibus blanditiis est vitae quibusdam corporis voluptate sequi, minus mollitia.
                Exercitationem error voluptatem, molestiae ullam placeat ratione consequuntur pariatur eius laborum aspernatur? Alias accusamus odit minus optio magnam nam voluptatibus hic et nulla? Ad voluptates, nemo voluptatibus at temporibus nulla!
                Asperiores necessitatibus totam repellat explicabo deleniti amet hic debitis sint assumenda ab soluta vitae voluptatem sit dicta tenetur, quis quisquam! Nulla minus eius placeat corporis sed voluptates veniam quia adipisci.
                Ex odit assumenda obcaecati laboriosam nihil quidem, accusamus dolorem tempore aperiam aliquid, eum unde? Suscipit quod sapiente eaque commodi magni animi dolor, in voluptatum unde dolores consectetur nostrum similique maxime.
                Impedit numquam sint, officiis natus explicabo, porro voluptatibus non consequatur, assumenda cumque nemo. Blanditiis accusamus facilis laudantium, nihil aspernatur itaque, similique suscipit deleniti tempore fugiat sequi commodi animi, deserunt doloribus?
                Laudantium, unde. Itaque illo est sequi at! Nam consequatur adipisci velit voluptates quae quos, excepturi necessitatibus, ea blanditiis nesciunt doloribus placeat, facilis quas nisi modi aliquid porro commodi optio maiores.
                Minus, praesentium optio, esse eveniet fuga aliquam suscipit voluptatum debitis numquam maxime quisquam molestiae magni veritatis quibusdam iure unde minima quas sunt similique quam, magnam laborum ipsa. Fuga, eaque provident.
                Voluptatem atque unde magnam quibusdam eaque non incidunt veritatis id voluptate? Est velit impedit minus? Harum repellat eligendi consectetur enim, omnis animi, cupiditate aliquid explicabo, perspiciatis ullam provident distinctio nostrum?
                Voluptates officia aliquid beatae temporibus ea repellendus. Sunt voluptatum molestias ullam voluptate culpa mollitia perspiciatis quaerat voluptates aliquid excepturi, totam voluptas fugiat accusantium tempore corporis, dicta a dolorem similique laborum.
                Illum consequatur sed iure officia veritatis vel nihil nesciunt, repellat animi error inventore vitae eligendi assumenda laudantium accusamus reiciendis pariatur earum dolorum debitis amet at, non vero? Alias, et! Accusantium?
                Et neque tenetur voluptate. Numquam, possimus sit sint ratione nesciunt quibusdam commodi corrupti. Repudiandae totam, ullam ratione ex libero cum dolor ipsa excepturi in laborum atque fugit provident esse veniam.
                Ea, alias. Pariatur odit reiciendis alias eaque, corporis, sed velit, temporibus neque voluptatibus voluptatum tenetur quaerat? Quaerat neque aut voluptas eos labore ipsam earum architecto vero dolor, voluptate quisquam corporis.
                Vero labore voluptas dicta et iste sequi obcaecati sit sint. Sint animi, inventore ab commodi asperiores harum eos at incidunt alias cum quibusdam eum pariatur suscipit? Eligendi perferendis labore dolor.
                Ducimus possimus nihil incidunt repellendus? Cupiditate natus, maxime dignissimos incidunt dolores facere ducimus excepturi nisi. Temporibus atque cupiditate saepe repellendus accusamus sed ipsam molestiae! Aliquid qui minus molestiae nam architecto.
                Dolore, aliquam cumque, similique officia corporis ullam perspiciatis obcaecati dolores vero recusandae placeat dolorum, accusantium reprehenderit debitis optio quaerat quam? Tempore molestias quia voluptatibus, aliquid nulla veniam recusandae beatae totam.
                Impedit voluptatibus magnam eaque! Corrupti autem commodi cupiditate exercitationem maiores qui vero ullam ipsam veniam et dolorem sit obcaecati architecto in consectetur voluptate praesentium, nemo quam ipsum omnis tempora laborum.
                Porro, illo nulla voluptate dolorem molestiae ut sequi ullam, laboriosam nam laborum itaque rem soluta vitae doloribus earum est accusamus eligendi atque necessitatibus alias explicabo nemo aut veritatis possimus? Est.
            </div>
        </>
        
    )
}

export default Navbar