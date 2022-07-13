---
categories: Visualisasi
layout: visualisasi

title: Diagonal pada kubus
title_page: Diagonal pada kubus
js: diagonal-kubus_s
---

<main>
    <div class="content"> 
        <div class="subject">
            <h1>Diagonal pada kubus</h1>
            <a href="https://github.com/risoume/risoume.github.io/blob/main/assets/js/diagonal-kubus_s.js"><span>&lt;code></span></a>
            <p>Visualisasi diagonal sisi, diagonal ruang, bidang diagonal, dan segitiga pada kubus.</p>
            <div class="user-area">   
                <label class="label-input">Masukkan bidang atau garis:</label>
                <input id="input1" class="input-block" value="BCHE" autofocus="autofocus">       
                <div class="btn-box">
                    <button class="green" id="solve">Draw</button>
                    <button onclick="erase()" class="grey">Clear</button>
                </div>      
            </div>
        </div>         
        <div class="math-show" style="padding: 0;">
            <div class="canvas-env">
                <canvas class="canvas-show" id="canvas1"></canvas>
            </div>
            <div class="layer-display">         
                  <label><b>Log:</b></label>
                  <div id="board">Input Anda akan ditampilkan di sini.</div>
            </div>
        </div>
    </div> 
</main>
