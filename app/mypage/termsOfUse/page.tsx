import BackHeader from "@/app/components/backHeader/BackHeader";
import React from "react";
import styles from "./termsOfUse.module.css";

const Page = () => {
  return (
    <>
      <div className={styles.content}>
        <BackHeader></BackHeader>
        <span>이용 약관</span>

        <h2>제1조(목적)</h2>
        <p>
          이 약관은 스위프13팀(이하 &quot;회사&quot;라 한다)가 운영하는
          &quot;끄적끄적&quot;(이하 &quot;사이트&quot;라 한다)에서 제공하는 웹
          서비스(이하 &quot;서비스&quot;라 한다)를 이용함에 있어
          &quot;회사&quot;와 이용자의 권리, 의무 및 책임 사항 등을 규정함을
          목적으로 한다.
        </p>
        <br />

        <h2>제2조(용어의 정의)</h2>
        <p>본 약관에서 사용되는 용어의 정의는 다음과 같다.</p>
        <ol>
          <li>
            &quot;서비스&quot;라 함은 &quot;회사&quot;가 운영하는 사이트를 통해
            개인이 슬로건, 네이밍, 포토샵, 로고, 아이디어, 기타 등을 구하는
            목적으로 등록하는 자료를 DB화여 채택 시 주최자에게 제공하는 서비스,
            제공한 자에게는 그에 맞는 상금을 수여하는 &quot;사이트&quot;에서
            제공하는 제반 서비스를 의미한다.
          </li>
          <li>
            &quot;회원&quot;이라 함은 &quot;회사&quot;가 제공하는 서비스를
            이용하거나 이용하려는 자로, 카카오, 네이버 등 외부 서비스 연동을
            통해 &quot;회사&quot;와 이용계약을 체결한 자 또는 체결하려는 자를
            포함하며, 아이디와 비밀번호 설정 등 회원가입 확인 이메일 등을 통해
            &quot;회사&quot;로부터 &quot;회원&quot;으로 인정받은
            &quot;개인회원&quot;을 말한다.
          </li>
          <li>
            &quot;아이디&quot;라 함은 &quot;회원&quot;의 식별과
            &quot;회원&quot;의 서비스 이용을 위하여 &quot;회원&quot;이 가입 시
            사용한 이메일 주소를 말한다.
          </li>
          <li>
            &quot;비밀번호&quot;라 함은 위 제3항에 따라 &quot;회원&quot;이
            회원가입 시 아이디를 설정하면서 아이디를 부여받은 자와 동일인임을
            확인하고 &quot;회원&quot;의 권익을 보호하기 위하여
            &quot;회원&quot;이 선정한 문자와 숫자의 조합 또는 이와 동일한 용도로
            쓰이는 &quot;사이트&quot;에서 자동 생성된 인증코드를 말한다.
          </li>
          <li>
            &quot;비회원&quot;이라 함은 &quot;회원&quot;에 가입하지 않고
            &quot;회사&quot;가 제공하는 서비스를 이용하는 자를 말한다.
          </li>
        </ol>
        <br />

        <h2>제3조(약관의 명시와 개정)</h2>
        <ol>
          <li>
            &quot;회사&quot;가 약관을 개정할 경우에는 적용일자 및 개정사유를
            명시하여 현행약관과 함께 그 개정약관의 적용일자 7일 전부터 적용일자
            전일까지 공지한다. 단 &quot;회원&quot;의 권리, 의무에 중대한 영향을
            주는 변경의 경우에는 적용일자 30일 전부터 공지하도록 한다.
          </li>
          <li>
            &quot;회원&quot;은 변경된 약관에 대해 거부할 권리가 있다.
            &quot;회원&quot;은 변경된 약관이 공지된 지 15일 이내에 거부의사를
            표명할 수 있다. &quot;회원&quot;이 거부하는 경우 본 서비스 제공자인
            &quot;회사&quot;는 15일의 기간을 정하여 &quot;회원&quot;에게 사전
            통지 후 당해 &quot;회원&quot;과의 계약을 해지할 수 있다. 만약,
            &quot;회원&quot;이 거부의사를 표시하지 않거나, 전항에 따라 시행일
            이후에 서비스를 이용하는 경우에는 동의한 것으로 간주한다.
          </li>
          <li>
            &quot;회사&quot;는 &quot;회원&quot;이 가입 신청 시 등록한 이메일을
            활용하여, &quot;회원&quot;에 대한 각종 고지나 통지를 이행할 수 있다.
            단, &quot;회원&quot;에게 서비스 이용에 대한 정보를 고지, 통지 및
            공지가 필요할 경우 수신에 동의한 이외의 수단으로 이행할 수 있다.
          </li>
        </ol>
        <br />

        <h2>제4조(약관의 해석)</h2>
        <p>
          &quot;회원&quot;이 &quot;회사&quot;와 개별 계약을 체결하여 서비스를
          이용하는 경우에는 개별 계약이 우선한다.
        </p>
        <br />

        <h2>제5조(서비스 이용계약의 성립)</h2>
        <ol>
          <li>
            &quot;회사&quot;는 &quot;회사&quot;의 서비스를 이용하고자 하는 자가
            본 약관과 개인정보취급방침의 내용에 대한 동의 및 &quot;회원&quot;
            가입 신청에 대하여 &quot;회사&quot;가 승낙함으로써 성립한다.
          </li>
          <li>
            사이트 등을 통한 회원 가입시 이용희망자는 본 약관 및 개인정보
            처리방침에 대한 동의 표시 및 회원 가입 신청을 하여야 하며,
            &quot;회사&quot;는 이용희망자가 본 약관 및 개인정보 처리방침의
            내용을 읽고 동의한 것으로 본다.
          </li>
          <li>
            카카오 등 외부 서비스와의 연동을 통한 회원 가입시 이용희망자는 본
            약관, 개인정보 처리방침 및 서비스 제공을 위한 &quot;회사&quot;의
            외부 서비스 계정 정보 접근 및 활용에 대한 동의 표시 및 회원 가입
            신청을 하여야 하며, &quot;회사&quot;는 이용희망자가 본 약관 및
            개인정보 처리방침의 내용을 읽고 동의한 것으로 본다.
          </li>
          <li>
            카카오, 네이버 등 외부서비스와의 연동을 통해 이용을 신청할 경우, 본
            약관과 개인정보취급방침, 서비스 제공을 위해 &quot;회사&quot;가
            &quot;회원&quot;의 외부 서비스 계정 정보 접근 및 활용에
            &quot;동의&quot; 또는 &quot;확인&quot; 버튼을 누르면
            &quot;회사&quot;가 웹 상의 안내로 &quot;회원&quot;에게 서비스를
            개시한다.
          </li>
        </ol>
        <br></br>

        <h2>제6조(이용신청의 승낙과 제한)</h2>
        <ol>
          <li>
            &quot;회사&quot;는 전조의 규정에 의한 이용신청 고객에 대하여
            업무수행 상 또는 기술상 지장이 없는 경우에는 원칙적으로 접수 순서에
            따라 서비스 이용을 승낙한다.
          </li>
          <li>
            &quot;회사&quot;는 아래 사항에 해당하는 경우에 대해서는 이용 신청을
            승낙하지 아니하며, 추후 아래 사항에 해당함이 확인된 경우
            &quot;회사&quot;는 이용 계약을 해지한다.
            <ol className={styles.a}>
              <li>실명이 아니거나 타인의 명의를 이용하여 신청한 경우</li>
              <li>서비스 이용신청서의 내용을 허위로 기재한 경우</li>
              <li>만 15세 미만의 아동이 신청한 경우</li>
            </ol>
          </li>
          <li>
            &quot;회사&quot;는 아래 사항에 해당하는 경우에는 그 신청에 대하여
            승낙 제한 사유가 해소될 때까지 승낙을 유보할 수 있다.
            <ol className={styles.a}>
              <li>&quot;회사&quot;가 설비의 여유가 없는 경우</li>
              <li>&quot;회사&quot;의 기술상 지장이 있는 경우</li>
              <li>기타 &quot;회사&quot;의 귀책사유로 이용승낙이 곤란한 경우</li>
            </ol>
          </li>
        </ol>
        <br></br>

        <h2>제7조(서비스의 내용)</h2>
        <ol>
          <li>
            &quot;회사&quot;는 제2조 1항의 서비스를 제공할 수 있으며 그 내용은
            다음 각 호와 같다.
            <ol className={styles.a}>
              <li>
                슬로건, 네이밍, 공모전, 포토샵, 아이디어, 로고, 기타 공모전
                서비스
              </li>
              <li>이용자 간의 교류와 소통에 관련한 서비스</li>
              <li>출품 및 채택 서비스</li>
              <li>창작물 제작과 관련 있는 기존 콘텐츠 연결 서비스</li>
              <li>캐시 충전 및 인출 서비스</li>
              <li>
                기타 &quot;회사&quot;가 추가 개발하거나 다른 회사와의 제휴 계약
                등을 통해 &quot;회원&quot;에게 제공하는 일체의 서비스
              </li>
            </ol>
          </li>
          <li>
            &quot;회사&quot;는 필요한 경우 서비스의 내용을 추가 또는 변경할 수
            있다. 단, 이 경우 &quot;회사&quot;는 추가 또는 변경 내용을
            &quot;회원&quot;에게 공지해야 한다.
          </li>
          <li>
            &quot;회사&quot;는 &quot;회원&quot;에게 서비스를 제공함에 있어서
            &quot;회원&quot;이 &quot;사이트&quot;에 등록하거나 제공한 각종
            정보를 관련 법령에 따른 조치(예: 비식별처리 등)을 통하여 통계적
            자료로 만들거나 DB화하여 활용할 수 있다.
          </li>
        </ol>
        <br></br>

        <h2>제8조(서비스 이용시간)</h2>
        <ol type="1">
          <li>
            &quot;회사&quot;는 특별한 사유가 없는 한 연중무휴, 1일 24시간
            서비스를 제공한다. 다만, &quot;회사&quot;는 서비스(또는
            &quot;사이트&quot;)의 종류나 성질에 따라 제공하는 서비스 중 일부에
            대해서는 별도로 이용시간을 정할 수 있으며, 이 경우
            &quot;회사&quot;는 그 이용시간을 사전에 &quot;회원&quot;에게
            공지하여야 한다.
          </li>
          <li>
            &quot;회사&quot;는 자료의 가공과 갱신을 위한 시스템 작업시간,
            장애해결을 위한 보수작업 시간, 회선 장애 등이 발생한 경우 일시적으로
            서비스를 중단할 수 있으며 계획된 작업의 경우 공지사항 게시 등 적절한
            수단으로 서비스 중단 시간과 작업 내용을 알려야 한다.
            다만,&quot;회사&quot;가 사전에 통지할 수 없는 부득 이한 사유가 있는
            경우 사후에 통지할 수 있다.
          </li>
        </ol>
        <br></br>

        <h2>제9조(회원, 출품작 및 주최글 등의 정보)</h2>
        <ol type="1">
          <li>
            &quot;회원&quot;의 공모전 출품 및 주최는 개인이 주최 작성 및 수정시
            희망한 형태로 등록 및 제공된다.
          </li>
          <li>
            &quot;회사&quot;는 안정적인 서비스를 제공하기 위해 테스트 및
            모니터링 용 도로 &quot;사이트&quot; 운영자가 주최글 및 출품작 등의
            정보를 삭제하도록 할 수 있다.
          </li>
        </ol>
        <br></br>

        <h2>제10조(서비스의 요금)</h2>
        <ol type="1">
          <li>
            회원 가입과 출품은 원칙적으로 무료이다. 다만 공모전 주최 시에 상금은
            1원 이상으로 정해야 하며, 캐시를 통해 상금을 지불한다.
          </li>
          <li>
            &quot;회사&quot;는 유료서비스를 제공할 경우 관련
            &quot;사이트&quot;에 요금에 대해서 공지를 하여야 한다.
          </li>
          <li>
            &quot;회사&quot;는 유료서비스 이용금액을 서비스의 종류 및 기간에
            따라 &quot;회사&quot;가 예고 없이 변경할 수 있다. 다만, 변경 이전에
            적용 또는 계약한 금액은 소급하여 적용하지 아니한다.
          </li>
          <li>
            유료 서비스 신청 후 &quot;회원&quot; 사정에 의해 서비스가 취소될
            경우, 정부가 고시하는 &#39;디지털콘텐츠 이용자보호지침&#39;에 따라
            &quot;회사&quot;는 본 지침이 제시하는 범위 내에서 환불 수수료를
            부과할 수 있다.
          </li>
          <li>
            공모전을 주최하는 &quot;회원&quot;은 공모전 주최 시작 24시간 전까지
            100% 취소 및 환불이 가능하다.
          </li>
          <li>
            이 외의 이유 등으로 이용료를 환불받고자 하는 &quot;회원&quot;은
            고객센터로 환불을 요청해야 한다.
          </li>
        </ol>
        <br></br>

        <h2>제11조(서비스 요금의 환불)</h2>
        <ol type="1">
          <li>
            &quot;회사&quot;는 다음 각 호에 해당하는 경우 이용요금을 환불한다.
            단, 각 당 사자의 귀책사유에 따라 환불 조건이 달라질 수 있다.
            <ol className={styles.a}>
              <li>네트워크 또는 시스템 장애로 서비스 이용이 불가능한 경우</li>
              <li>유료서비스 이용이 개시되지 않은 경우</li>
            </ol>
          </li>
          <li>
            &quot;회사&quot;는 환불 요건에 부합하는 것으로 판단될 경우, 각
            서비스 환불 안내에 따라 유료이용 계약 당시 상품의 정가 기준으로
            서비스 제공된 기간에 해당하는 요금을 차감한 잔액을 환불한다.
          </li>
        </ol>
        <br></br>

        <h2>제12조(서비스 제공의 중지)</h2>
        <p>
          &quot;회사&quot;는 다음 각호에 해당하는 경우 서비스의 제공을 중지할 수
          있다.
        </p>
        <ol type="1">
          <li>
            설비의 보수 등 &quot;회사&quot;의 필요에 의해 사전에
            &quot;회원&quot;들에게 통지한 경우
          </li>
          <li>기간통신사업자가 전기통신서비스 제공을 중지하는 경우</li>
          <li>
            기타 불가항력적인 사유에 의해 서비스 제공이 객관적으로 불가능 한
            경우
          </li>
        </ol>
        <br></br>
        <h2>제13조(콘텐츠의 책임과 회사의 정보 수정 권한)</h2>
        <ol type="1">
          <li>
            본 조항에서 이야기하는 &quot;콘텐츠&quot;는 공모전 게시글과 출품작,
            출품작에 대한 댓글을 포함하여 이야기 한다.
          </li>
          <li>
            &quot;회원&quot;은 콘텐츠를 사실에 근거하여 성실하게 작성해야 하며,
            &quot;회원&quot; 본인이 작성하는 것을 원칙으로 한다.
          </li>
          <li>
            &quot;회사&quot;는 &quot;회원&quot;이 작성한 콘텐츠를 본 약관의 규정
            및 &quot;회사&quot;의 내부 규정에 따라 검토하여 문제가 없을 경우
            &quot;사이트&quot;에 게시하는 방식의 필터링 작업을 수행할 수 있으며,
            법령 위반 등의 문제가 있다고 판단할 경우 &quot;회원&quot;에게 사전
            통보 없이 &quot;사이트&quot;에 게시하지 않는다.
          </li>
          <li>
            콘텐츠 내용에 사회적 통념에 어긋나는 문구와 내용, 명백하게 타인의
            명예훼손에 기초한 내용이 있을 경우 &quot;회사&quot;는 이를 언제든지
            삭제하거나 수정할 수 있다.
          </li>
          <li>
            &quot;회원&quot;이 등록한 자료로 인해 타인(또는 타법인)으로부터
            허위사실 및 명예훼손 등으로 삭제 요청이 접수된 경우
            &quot;회사&quot;는 &quot;회원&quot;에게 사전 통지 없이 본 자료를
            삭제 혹은 비노출 처리할 수 있으며, 삭제 혹은 비노출 처리 후 메일
            등의 방법으로 통지할 수 있다.
          </li>
          <li>
            &quot;회사&quot;는 &quot;회원&quot;이 작성한 커뮤니티 콘텐츠&quot;에
            허위사실, 사회적 통념에 어긋나는 내용, 특정 기업 또는 인물에 대한
            명예훼손 또는 비방, 사칭, 욕설 및 비속어, 영리 목적의 광고, 음란성을
            띄는 내용, 지적재산권 침해, 개인 정보 노출, 현행 법률 및 본 약관에
            위배되는 내용이 있을 경우 이를 언제든지 삭제할 수 있으며, 관련
            법령에 따른 책임을 물을 수 있다.
          </li>
          <li>
            &quot;회사&quot;는 &quot;회원&quot;의 탈퇴를 이유로
            &quot;콘텐츠&quot;를 삭제하지 않 으며, &quot;회원&quot;이 서비스
            탈퇴 시 삭제되기를 원할 경우 고객센터에 요청해야 한다.
          </li>
        </ol>
        <br></br>

        <h2>제14조(회사의 의무)</h2>
        <ol type="1">
          <li>
            &quot;회사&quot;는 본 약관에서 정한 바에 따라 계속적, 안정적으로
            서비스를 제공할 수 있도록 최선의 노력을 다해야 한다.
          </li>
          <li>
            &quot;회사&quot;는 서비스와 관련한 &quot;회원&quot;의 불만사항이
            접수되는 경우 이를 즉시 처리하여야 하며, 즉시 처리가 곤란한 경우에는
            그 사유와 처리일정을 서비스 화면 또는 기타 방법을 통해 동
            &quot;회원&quot;에게 통지하여야 한 다.
          </li>
          <li>
            천재지변 등 예측하지 못한 일이 발생하거나 시스템의 장애가 발생 하여
            서비스가 중단될 경우 이에 대한 손해에 대해서는 &quot;회사&quot;가
            책임 을 지지 않는다. 다만 자료의 복구나 정상적인 서비스 지원이
            되도록 최선을 다할 의무를 진다.
          </li>
          <li>
            &quot;회사&quot;는 &quot;회원&quot;의 유료 결제와 관련한 결제 사항
            정보 등을 관련 법령에 따라서 1년 이상 보존한다.
          </li>
        </ol>
        <br></br>

        <h2>제15조(회원의 의무)</h2>
        <ol type="1">
          <li>
            &quot;회원&quot;은 관계법령과 본 약관의 규정 및 기타
            &quot;회사&quot;가 통지하는 사항 을 준수하여야 하며, 기타
            &quot;회사&quot;의 업무에 방해되는 행위를 해서는 안 된다.
          </li>
          <li>
            &quot;회원&quot;은 본 서비스를 건전한 목적 외로 사용해서는 안 되며
            이용 중 다음 각 호의 행위를 해서는 안 된다.
            <ol className={styles.a}>
              <li>다른 회원의 아이디를 부정 사용하는 행위</li>
              <li>범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위</li>
              <li>타인의 명예를 훼손하거나 모욕하는 행위</li>
              <li>타인의 지적재산권 등의 권리를 침해하는 행위</li>
              <li>해킹행위 또는 바이러스의 유포 행위</li>
              <li>
                타인의 의사에 반하여 광고성 정보 등 일정한 내용을
                계속적으로전송하는 행위
              </li>
              <li>
                서비스의 안정적인 운영에 지장을 주거나 줄 우려가 있다고 판단
                되는 행위
              </li>
              <li>사이트의 정보 및 서비스를 이용한 영리행위</li>
              <li>
                그밖에 선량한 풍속, 기타 사회질서를 해하거나 관계법령에 위반
                하는 행위
              </li>
            </ol>
          </li>
        </ol>
        <br></br>

        <h2>제16조(회원탈퇴 및 회원자격 상실)</h2>
        <ol type="1">
          <li>
            &quot;회원&quot;은 &quot;회사&quot;에 언제든지 탈퇴를 요청할 수
            있으며, &quot;탈퇴하기&quot; 등을 통하여 이용계약 해지 신청을 할 수
            있으며, &quot;회사&quot;는 관련법 등이 정하는 바에 따라 이를
            처리한다.
            <ol className={styles.a}>
              <li>회원의 의무를 성실하게 이행하지 않았을 때</li>
              <li>
                본 서비스 목적에 맞지 않는 분야에 정보를 활용하여 사회적 물의 가
                발생한 때
              </li>
              <li>회원이 등록한 정보의 내용이 사실과 다르거나 조작되었을 때</li>
              <li>
                본 서비스와 관련하여 &quot;회사&quot; 또는 제3자의 명예를
                훼손하였을 때
              </li>
              <li>기타 위 각호에 준하는 사유가 발생하였을 때</li>
            </ol>
          </li>
          <li>
            &quot;회원&quot;이 회원탈퇴를 하는 경우 탈퇴 이전에 작성한 게시물은
            이 약관 제13조 제7항에 근거하여 삭제되지 않는다.
          </li>
          <li>
            &quot;회사&quot;는 &quot;회원&quot;이 이 약관 및 개별서비스
            이용약관을 위반한 경우 경고, 일시적 이용정지, 영구적 이용정지 등의
            단계로 서비스 이용을 제한하 거나 이용계약을 해지할 수 있다.
          </li>
          <li>
            &quot;회원&quot;은 제3항에 따른 서비스 이용정지 기타 서비스이용과
            관련된 이용제한에 대한 &quot;회사&quot;가 정한 절차에 따라
            이의신청을 할 수 있으며, &quot;회사&quot;는 &quot;회원&quot;의
            이의신청이 정당하다고 판단되는 경우 즉시 서비스 이용 을 재개한다.
          </li>
        </ol>
        <br></br>

        <h2>제17조(손해배상)</h2>
        <ol type="1">
          <li>
            &quot;회사&quot;가 &quot;회원&quot;에게 손해를 입히거나 기타
            &quot;회사&quot;가 제공하는 모든 서비스와 관련하여
            &quot;회사&quot;의 책임 있는 사유로 인해 &quot;회원&quot;에게 손해가
            발생한 경우 &quot;회사&quot;는 그 손해를 배상하여야 한다.
          </li>
          <li>
            &quot;회원&quot;이 이 약관의 규정에 위반한 행위로 &quot;회사&quot;
            및 제3자에게 손해를 입히거나 &quot;회원&quot;의 책임 있는 사유에
            의해 &quot;회사&quot; 및 제3자에게 손해를 입힌 경우에는
            &quot;회원&quot;은 그 손해를 배상하여야 한다.
          </li>
          <li>
            타 &quot;회원&quot;의 귀책사유로 &quot;회원&quot;의 손해가 발생한
            경우 &quot;회사&quot;는 이에 대한 배상 책임이 없다.
          </li>
        </ol>
        <br></br>

        <h2>제18조(회원의 개인정보보호)</h2>
        <ol type="1">
          <li>
            &quot;회사&quot;는 &quot;회원&quot;의 개인정보보호를 위하여 노력해야
            한다. &quot;회원&quot;의 개 인정보보호에 관해서는 정보통신망이용촉진
            및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 법령과
            &quot;회사&quot;가 &quot;사이트&quot;에 게시하는 개인 정보취급방침에
            따른다.
          </li>
        </ol>
        <br></br>

        <h2>제19조(통합회원제)</h2>
        <ol type="1">
          <li>
            &quot;회원&quot;은 통합된 하나의 계정(ID 및 비밀번호)를 통해 이 약관
            제2조 제1호에서 명시한 &quot;사이트&quot; 및 관련 서비스를 이용할 수
            있다.
          </li>
          <li>
            &quot;회원&quot;의 최초 서비스 이용신청 이후 &quot;회사&quot;의
            사이트가 추가되는 경우 별도 약관으로 명시하지 않는 한 이 약관이
            적용되며, &quot;회사&quot;는 신규 사이트 또는 서비스 개시에 대한
            정보를 &quot;사이트&quot;에 공지하거나 &quot;회원&quot;에게
            전자우편으로 공지할 수 있다.
          </li>
        </ol>
        <br></br>

        <h2>제20조(분쟁의 해결)</h2>
        <ol type="1">
          <li>
            &quot;회사&quot;와 &quot;회원&quot;은 서비스와 관련하여 발생한
            분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 하여야 한다.
          </li>
          <li>
            전항의 노력에도 불구하고, 동 분쟁에 관한 소송 발생 시 소송은
            &quot;회사&quot;의 주소지 관할법원을 전속적 관할로 정한다.
          </li>
        </ol>
        <br></br>

        <p>부칙</p>
        <ol className={styles.dis}>
          <li>이 약관은 2025년 3월 2일자로 공고한다.</li>
          <li>이 약관은 2025년 3월 14일부터 시행한다.</li>
        </ol>
      </div>
    </>
  );
};

export default Page;
