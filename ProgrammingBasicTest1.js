const hangDonVi = [
  'Không',
  'Một',
  'Hai',
  'Ba',
  'Bốn',
  'Năm',
  'Sáu',
  'Bảy',
  'Tám',
  'Chín',
];

const hangChuc = [
  'Linh',
  'Mười',
  'Hai Mươi',
  'Ba Mươi',
  'Bốn Mươi',
  'Năm Mươi',
  'Sáu Mươi',
  'Bảy Mươi',
  'Tám Mươi',
  'Chín Mươi',
];

const chuyenSoThanhChu = (number) => {
  const numberStr = number.toString();
  const numberLength = numberStr.length;

  let result = '';

  const readTwo = (numberWithTwoStr) => {
    let _result = hangChuc[numberWithTwoStr[0]];
    if (numberWithTwoStr == 0) {
      return '';
    }
    if (numberWithTwoStr > 0 && numberWithTwoStr < 10) {
      _result = _result + ' ' + hangDonVi[numberWithTwoStr[1]];
    } else if (numberWithTwoStr[1] != 0) {
      if (numberWithTwoStr[1] == 5) {
        _result = _result + ' Lăm';
      } else if (numberWithTwoStr[1] == 1 && numberWithTwoStr[0] != 1) {
        _result = _result + ' Mốt';
      } else {
        _result = _result + ' ' + hangDonVi[numberWithTwoStr[1]];
      }
    }
    return _result;
  };

  const readThree = (numberWithThreeStr) => {
    let _result = hangDonVi[numberWithThreeStr[0]] + ' Trăm';
    const _numberWithThreeStr = numberWithThreeStr;
    _result =
      _result +
      ' ' +
      readTwo(_numberWithThreeStr.slice(1, numberWithThreeStr.length));
    return _result;
  };

  if (numberLength === 1) {
    result = hangDonVi[number];
  } else if (numberLength === 2) {
    result = readTwo(numberStr);
  } else if (numberLength === 3) {
    result = readThree(numberStr);
  }
  console.log(result);
};

chuyenSoThanhChu(351);
