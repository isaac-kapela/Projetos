import * as S from "./Convite_style";

export default function Convite() {
  return (
    <>
      <S.SectionConvite>
        <section>
          <div className="botoes">
            <button>
              Comfirmar
              <br />
              Presença
            </button>
            <button>
              <a href="https://www.google.com/maps/place/Av.+Frederick+Hoffmann,+239+-+Jardim+Coimbra,+S%C3%A3o+Paulo+-+SP,+03693-040/@-23.5299714,-46.4782564,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce60d5799a5977:0x5f410c31c2f00003!8m2!3d-23.5299714!4d-46.4782564!16s%2Fg%2F11c5mk2vjn?entry=ttu" target="_blank">
              Local Da <br />
              Festa </a>
            </button>
            <button>
              Sugestão De <br />
              Presente
            </button>
          </div>
        </section>
      </S.SectionConvite>
    </>
  );
}
