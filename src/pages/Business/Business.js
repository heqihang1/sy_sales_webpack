import React from "react";
import styles from './Business.less'

export default function Business() {

  const list = [
    {key:1, name:'活动策划及过程', enName:'EVENTS MANAGMENT'},
    {key:1, name:'网络增强现实技术', enName:'AUGMENTED REALITY'},
    // {key:1, name:'扩展现实技术', enName:'EXTENDED REALIYY'},
    // {key:1, name:'影视制作', enName:'VIDEO PRODUTION'},
    // {key:1, name:'全网数码营销', enName:'DIGITAL MARKETING'},
    // {key:1, name:'网红营销', enName:'INFIUENCER MARKETING'},
  ]

  const lineList = [
    {key:1},{key:2},{key:3},{key:4},{key:5}
  ]

  return (
    <div className={styles.container}>

      <div class="wow slideInRight" data-wow-duration="4s">wow元素可见展示动画</div>
      
      <div>
        {list.map(item => {
          return (
            <div key={item.key} className={styles.box}>
              <div>
                {lineList.map(l => (
                  <div key={l.key} className={styles.line}></div>
                ))}
              </div>
              <div>
                <span className={styles.enNames}>{item.enName}</span>
                <span className={styles.details}>{'了解详情 >'}</span>
              </div>
              <div className={styles.name}>{item.name}</div>
            </div>
          )
        })}
      </div>

    </div>
  )
}