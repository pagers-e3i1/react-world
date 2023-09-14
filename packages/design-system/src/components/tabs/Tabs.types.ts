export interface TabsProps {
  /** 탭을 구분해주는 고유 값
   *
   * activeTab이 null이면 활성화된 탭이 없는 상태입니다.
   */
  activeTab: string | null;
  /** 탭을 클릭했을 때 호출되는 함수 */
  onChangeActiveTab: (value: string) => void;
}

export interface TabProps {
  /** 탭을 구분해주는 고유 값 */
  value: string;
}

export interface TabPanelProps {
  /** 탭을 구분해주는 고유 값 */
  value: string;
}
