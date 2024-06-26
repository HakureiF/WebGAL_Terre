import CommonOptions from "../components/CommonOption";
import { ISentenceEditorProps } from "./index";
import styles from "./sentenceEditor.module.scss";
import { useValue } from "../../../../hooks/useValue";
import TerreToggle from "../../../../components/terreToggle/TerreToggle";
import { t } from "@lingui/macro";

export default function SetTextbox(props: ISentenceEditorProps) {
  const isHideTextbox = useValue(props.sentence.content === "hide");
  const submit = () => {
    props.onSubmit(`setTextbox:${isHideTextbox.value ? "hide" : "on"};`);
  };

  return <div className={styles.sentenceEditorContent}>
    <div className={styles.editItem}>
      <CommonOptions key="isNoDialog" title={t`隐藏文本框`}>
        <TerreToggle title="" onChange={(newValue) => {
          isHideTextbox.set(newValue);
          submit();
        }} onText={t`隐藏文本框`} offText={t`显示文本框`} isChecked={isHideTextbox.value} />
      </CommonOptions>
    </div>
  </div>;
}
