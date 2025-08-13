enum WeekDays {
  Monday = 'Thứ Hai',
  Tuesday = 'Thứ Ba',
  Wednesday = 'Thứ Tư',
  Thursday = 'Thứ Năm',
  Friday = 'Thứ Sáu',
  Saturday = 'Thứ Bảy',
  Sunday = 'Chủ Nhật'
}

for (let day of Object.values(WeekDays)) {
  console.log(day);
}
