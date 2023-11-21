export default function StoreHomeFilterBar(){
  return(
    <div className="popular_filter_bar_section">
      <div className="popular_filter_bar">
        <div className="popular_filter_bar_control_list">
          <div className="popular_filter_bar_control_list_left">
            <div className="popular_filter_bar_control_list_item">
              <div className="popular_filter_bar_drop_down">
                <button className="popular_filter_bar_drop_down_button" type="button">
                  배송
                  <svg className="popular_downarrow" width="12" height="12" viewBox="0 0 12 12" fill="currentColor" preserveAspectRatio="xMidYMid meet"><path d="M6.069 6.72l4.123-3.783 1.216 1.326-5.32 4.881L.603 4.273l1.196-1.346z"></path></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="popular_filter_bar_control_list_right">
              <div className="popular_filter_bar_control_list_item_right">
                <div className="popular_filter_bar_drop_down">
                  <button className="popular_filter_bar_order_button">
                    인기순
                    <svg className="popular_smallarrow" width="8" height="8" viewBox="0 0 8 8" preserveAspectRatio="xMidYMid meet"><path fill="#BDBDBD" d="M0 2l4 4 4-4z"></path></svg>
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}