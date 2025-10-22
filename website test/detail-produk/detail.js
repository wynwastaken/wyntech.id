
const isiNominal = document.querySelector('.isi_nominal');
const showMoreBtn = document.querySelector('.show-more');
const showLessBtn = document.querySelector('.show-less');
const tambah_quantity = document.querySelector('.tambah');
const kurang_quantity = document.querySelector('.kurang');
const input_layar = document.querySelector('.input_stok');
const nominals = document.querySelectorAll('.nominal');
const label_harga = document.querySelector('.harga_qty');
const label_total = document.querySelector('.harga_total');

const label_harga_satuan = document.querySelector('.price');

let qty = 1;
let total = 0;
let harga;
function update_harga(nilai){
    label_harga.textContent = nilai.toLocaleString('id-ID');
}

function update_total(nilai,qty){
    label_total.textContent = (nilai * qty).toLocaleString('id-ID');
}
    
if (isiNominal && showMoreBtn && showLessBtn) {
    // Sembunyikan tombol Show Less secara default
    showLessBtn.style.display = 'none';
        
    showMoreBtn.addEventListener('click', function() {
        // Tambah class expanded untuk menampilkan semua nominal
        isiNominal.classList.add('expanded');
            
        // Toggle tombol
        showMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'inline-block';
    });
        
    showLessBtn.addEventListener('click', function() {
        // Hapus class expanded untuk menyembunyikan nominal extra
        isiNominal.classList.remove('expanded');
            
        // Toggle tombol
        showLessBtn.style.display = 'none';
        showMoreBtn.style.display = 'inline-block';
    });
};

tambah_quantity.addEventListener('click',function(){
    let quantity = parseInt(input_layar.value);
    quantity++;
    input_layar.value = quantity;
    update_total(harga,quantity);
    qty = quantity;
    
});

kurang_quantity.addEventListener('click',function(){
    let quantity = parseInt(input_layar.value);
    
    if(quantity == 1){
        return
    }else{
        quantity--;
        input_layar.value = quantity;
        update_total(harga,quantity);
    }
    qty = quantity;
});     

if(nominals.length >0){
    nominals.forEach(function(nominal){
    nominal.addEventListener('click',function(){
        harga = parseInt(nominal.dataset.nominal);
        total = parseInt(nominal.dataset.nominal);
        update_harga(harga);
        update_total(parseInt(nominal.dataset.nominal),qty);
    })
    })
}else{
    
    harga = parseInt(label_harga_satuan.dataset.harga);
    update_harga(harga);
    update_total(harga, qty);
    
}


