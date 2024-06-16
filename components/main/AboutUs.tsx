import React from "react";
import AboutUsCard from "../sub/AboutUsCard";

const AboutUs = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="about-uss"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Nas Tim
      </h1>
      <div className="w-full md:w-7/10 text-center">
        <p className="text-white text-lg md:text-xl max-w-full px-6 mb-8">
          FlowSite čini grupa mladih, entuzijastičnih studenata FON-a sa iskustvom u
          pravljenju sajtova. Pogledajte naše projekte i veštine!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <AboutUsCard
          src="/Luka.png"
          title="Luka"
          description="Zdravo! Moje ime je Luka, imam 20 godina. Trenutno sam student Fakulteta organizacionih nauka (FON). Već tri godine se aktivno bavim izradom sajtova, gde sam stekao značajno iskustvo u web dizajnu i programiranju. Pored toga, bavim se i network marketingom, što mi omogućava da se povežem s različitim ljudima i razvijam svoje poslovne veštine."
        />
        <AboutUsCard
          src="/Ja-bgr.png"
          title="Djordje"
          description="Zdravo, ja sam Đorđe. Već četiri godine, aktivno se posvećujem razvoju veb aplikacija i to mi pruža zadovoljstvo. Takođe sam student na FON-u s namerom da svoju strast pretvorim u profesiju. Sa svoja dva prijatelja, planiram dalji razvoj u ovoj oblasti."
        />
        <AboutUsCard
          src="/Vuk Betman.png"
          title="Vuk"
          description="Zdravo, ja sam Vuk, dvadesetogodišnji entuzijasta za veb, trenutno student na FON fakultetu. Od svoje 16. godine, posvećeno se bavim kreiranjem veb sajtova, a sada sam odlučio da svoj hobi pretvorim u profesiju sa još dva prijatelja koja dele isto interesovanje"
        />
      </div>
    </div>
  );
};

export default AboutUs;
