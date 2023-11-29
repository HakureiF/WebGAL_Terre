import {logger} from "@/utils/logger";
import CommonOptions from "@/pages/editor/GraphicalEditor/components/CommonOption";
import {TextField} from "@fluentui/react";
import { Checkbox } from '@fluentui/react';
import {useValue} from "@/hooks/useValue";
import useTrans from "@/hooks/useTrans";

export function EffectEditor(props:{
  json:string,onChange:(newJson:string)=>void
}){
  const t = useTrans('editor.graphical.sentences.transform.');

  const effectObject = (()=>{
    try {
      if(props.json===''){
        return JSON.parse('{}');
      }
      return JSON.parse(props.json);
    }catch (e){
      logger.error('JSON 解析错误',e);
      return {};
    }
  })();

  const x = useValue(effectObject?.position?.x ?? '');
  const y = useValue(effectObject?.position?.y ?? '');
  const scaleX = useValue(effectObject?.scale?.x ?? '');
  const scaleY = useValue(effectObject?.scale?.y ?? '');
  const alpha = useValue(effectObject?.alpha ?? '');
  const rotation = useValue(effectObject?.rotation ?? '');
  const blur = useValue(effectObject?.blur ?? '');
  const oldFilm = useValue(effectObject?.oldFilm ?? '');
  const dotFilm = useValue(effectObject?.dotFilm ?? '');
  const reflectionFilm = useValue(effectObject?.reflectionFilm ?? '');
  const glitchFilm = useValue(effectObject?.glitchFilm ?? '');
  const rgbFilm = useValue(effectObject?.rgbFilm ?? '');
  const godrayFilm = useValue(effectObject?.godrayFilm ?? '');

  const updateObject = () => {
    const result:{[key: string]: any;} = {};
    console.log(x.value);
    console.log(!isNaN(Number(x.value))&&x.value!=='');
    if(!isNaN(Number(x.value))&&x.value!==''){result.position = result.position??{};result.position.x = Number(x.value);};
    if(!isNaN(Number(y.value))&&y.value!==''){result.position = result.position??{};result.position.y = Number(y.value);};
    if(!isNaN(Number(scaleX.value))&&scaleX.value!==''){result.scale = result.scale??{};result.scale.x = Number(scaleX.value);};
    if(!isNaN(Number(scaleY.value))&&scaleY.value!==''){result.scale = result.scale??{};result.scale.y = Number(scaleY.value);};
    if(!isNaN(Number(alpha.value))&&alpha.value!==''){result.alpha = Number(alpha.value);};
    if(!isNaN(Number(rotation.value))&&rotation.value!==''){result.rotation = Number(rotation.value);};
    if(!isNaN(Number(blur.value))&&blur.value!==''){result.blur = Number(blur.value);};
    if(oldFilm.value){result.oldFilm = 1;};
    if(dotFilm.value){result.dotFilm = 1;};
    if(reflectionFilm.value){result.reflectionFilm = 1;};
    if(glitchFilm.value){result.glitchFilm = 1;};
    if(rgbFilm.value){result.rgbFilm = 1;};
    if(godrayFilm.value){result.godrayFilm = 1;};
    console.log(result);
    return result;

    // return {
    //   alpha: !isNaN(Number(alpha.value)) ? Number(alpha.value) : 1, // Convert alpha to number
    //   position: {
    //     x: !isNaN(Number(x.value)) ? Number(x.value) : 0, // Convert x to number
    //     y: !isNaN(Number(y.value)) ? Number(y.value) : 0  // Convert y to number
    //   },
    //   scale: {
    //     x: !isNaN(Number(scaleX.value)) ? Number(scaleX.value) : 1, // Convert scaleX to number
    //     y: !isNaN(Number(scaleY.value)) ? Number(scaleY.value) : 1  // Convert scaleY to number
    //   },
    //   rotation: !isNaN(Number(rotation.value)) ? Number(rotation.value) : 0, // Convert rotation to number
    //   blur: !isNaN(Number(blur.value)) ? Number(blur.value) : 0 , // Convert blur to number
    //   oldFilm: oldFilm.value ? 1 : 0,
    //   dotFilm: dotFilm.value ? 1 : 0,
    //   reflectionFilm: reflectionFilm.value ? 1 : 0,
    //   glitchFilm: glitchFilm.value ? 1 : 0,
    //   rgbFilm: rgbFilm.value ? 1 : 0,
    //   godrayFilm: godrayFilm.value ? 1 : 0,
    // };
  };

  const submit = ()=>{
    console.log(updateObject());
    props.onChange(JSON.stringify(updateObject()));
  };


  return <>
    <CommonOptions key={1} title={t('transform.title')}>
      {t('transform.x')}<TextField value={x.value} placeholder="默认值0" onChange={(_, newValue) => {
        x.set(newValue);
      }} onBlur={submit}/>{'\u00a0'}

      {t('transform.y')}<TextField value={y.value} placeholder="默认值0" onChange={(_, newValue) => {
        y.set(newValue);
      }} onBlur={submit}/>
    </CommonOptions>
    <CommonOptions key={2} title={t('scale.title')}>
      {t('scale.x')}<TextField value={scaleX.value} placeholder="默认值0" onChange={(_, newValue) => {
        scaleX.set(newValue);
      }} onBlur={submit}/>{'\u00a0'}

      {t('scale.y')}<TextField value={scaleY.value} placeholder="默认值0" onChange={(_, newValue) => {
        scaleY.set(newValue);
      }} onBlur={submit}/>
    </CommonOptions>
    <CommonOptions key={3} title={t('effect.title')}>
      {t('effect.alpha')}<TextField value={alpha.value} placeholder="默认值1" onChange={(_, newValue) => {
        alpha.set(newValue);
      }} onBlur={submit}/>{'\u00a0'}

      {t('effect.rotation')}<TextField value={rotation.value} placeholder="默认值0" onChange={(_, newValue) => {
        rotation.set(newValue);
      }} onBlur={submit}/>{'\u00a0'}

      {t('effect.blur')}<TextField value={blur.value} placeholder="默认值0" onChange={(_, newValue) => {
        blur.set(newValue);
      }} onBlur={submit}/>
    </CommonOptions>
    <CommonOptions key={4} title={t('filter.title')}>
      <Checkbox checked={oldFilm.value === 1} onChange={(_, newValue) => { oldFilm.set(newValue ? 1 : 0); submit(); }} />{t('filter.oldFilm')}{'\u00a0'}
      <Checkbox checked={dotFilm.value === 1} onChange={(_, newValue) => { dotFilm.set(newValue ? 1 : 0); submit(); }} />{t('filter.dotFilm')}{'\u00a0'}
      <Checkbox checked={reflectionFilm.value === 1} onChange={(_, newValue) => { reflectionFilm.set(newValue ? 1 : 0); submit(); }} />{t('filter.reflectionFilm')}{'\u00a0'}
      <Checkbox checked={glitchFilm.value === 1} onChange={(_, newValue) => { glitchFilm.set(newValue ? 1 : 0); submit(); }} />{t('filter.glitchFilm')}{'\u00a0'}
      <Checkbox checked={rgbFilm.value === 1} onChange={(_, newValue) => { rgbFilm.set(newValue ? 1 : 0); submit(); }} />{t('filter.rgbFilm')}{'\u00a0'}
      <Checkbox checked={godrayFilm.value === 1} onChange={(_, newValue) => { godrayFilm.set(newValue ? 1 : 0); submit(); }} />{t('filter.godrayFilm')}
    </CommonOptions>
  </>;
}