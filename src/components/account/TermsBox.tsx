import TermsComponent from './TermsComponent'
import useCustomAgree, {TCustomAgree} from '../../hooks/useCustomAgree'

const TermsBox = () => {
  const {agreeState, clickCheckBox}: TCustomAgree = useCustomAgree()

  return (
    <div className="container" style={{width: 'auto'}}>
      <div className="info_title">
        <b>이용약관</b>
      </div>
      <div className="info_box_wrapper info_box_small">
        <div className="info_box_content">
          <TermsComponent />
        </div>
        <div className="info_agree">
          <label style={{cursor: 'pointer'}}>
            <input
              id="agree"
              type="checkbox"
              onClick={clickCheckBox}
              checked={agreeState}
            />
            <label htmlFor="agree"></label>
            다음 이용약관에 동의합니다.
          </label>
        </div>
      </div>
    </div>
  )
}

export default TermsBox
