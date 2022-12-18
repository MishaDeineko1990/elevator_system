let specific_weight_mathiral = 0.00786

// Довжина витка внутрішньої винтової лінії шнека
function l_inner_line(dm, p) {
  return  Math.round(Math.sqrt(Math.pow((Math.PI * dm), 2) + Math.pow(p, 2)))
  // ((ПИ()*d)^2+p^2)^0,5
}

// Довжина витка зовнішньої винтової лінії шнека
function l_out_line(d, p) {
  return  Math.round(Math.sqrt(Math.pow((Math.PI * d), 2) + Math.pow(p, 2)))
  // ((ПИ()*d)^2+p^2)^0,5
}

// Висота витка шнека
function h_shrps(d, dm) {
  return  Math.round(((d - dm) / 2) * 10) / 10
}

// Кут кільцевого тіла розгортки
function segment_angle(d, dm, p) {
  return  (l_out_line(d, p) - l_inner_line(dm, p)) / h_shrps(d, dm)
}

// Зовнішній діаметр плоскої розортки витка
function out_d_segment(d, dm, p) {
  return  (2 * l_out_line(d, p)) / segment_angle(d, dm, p)
}

// Внутрішній діаметр плоскої розгортки витка
function inner_d_segment(d, dm, p) {
  return  (2 * l_inner_line(dm, p)) / segment_angle(d, dm, p)
}

// Кількість витків на 1м спіралі
function count_stgment_on_m(p) {
  return  1000 / p
}

// Площа поверхні шнекової спіралі
// ПИ() * (Внутрішній діаметр плоскої розгортки витка^2 - Зовнішній діаметр плоскої розортки витка^2) * Кількість витків на 1м спіралі * Довжина спіралі на шнеку / 2000000
function count_segment_on_m(d, dm, p, l_sp) {
  return  Math.PI * (Math.pow(out_d_segment(d, dm, p), 2) - Math.pow(out_d_segment(d, dm, p), 2)) * count_segment_on_m(p) * l_sp / 2000000
}

// Довжина штрипси на 1 м спіралі
function l_shtrips_on_m_spiral(dm, p) {
  return  l_inner_line(dm, p) * count_stgment_on_m(p) * 1.3
}

// Маса одного метра шнекової спіралі
function weight_m_spiral(dm, d, s_shtr, specific_weight_mathiral) {
  return  s_shtr * h_shrps(d, dm) * l_shtrips_on_m_spiral(dm, p) * specific_weight_mathiral / 1000
}

// Труба основи шнека площа
function base_pipe_area(dm, l_base_pipe) {
  return Math.PI * dm * l_base_pipe / 1000
}

// Труба основи шнека	маса
function base_pipe_mass(dm, l_base_pipe , s_base_pipe, specific_weight_mathiral) {
  return base_pipe_area(dm, l_base_pipe) * s_base_pipe * specific_weight_mathiral 
}

//Труба основи шнека вартість
function base_pipe_mass(dm, l_base_pipe, s_base_pipe, specific_weight_mathiral) {
  return base_pipe_mass(dm, l_base_pipe, s_base_pipe, specific_weight_mathiral) * specific_weight_mathiral * price_pipe * 2.5 
}

// Демонтаж старої спіралі		
// Монтаж нової спіралі		
// Балансування шнека		
// Грунтування		
// ВІДПУСКНА ВАРТІСТЬ РЕМОНТУ (ВИГОТОВЛЕННЯ) ШНЕКА		
