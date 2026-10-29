(function () {
    //  모달 오픈 공통
    window.openModal = function (title, contentHtml) {
        const $modal = $("#global_modal");

        $modal.find("[data-modal-title]").text(title);
        $modal.find("[data-modal-body]").html(contentHtml);

        $modal.removeClass("hidden");
    };
    //  모달 닫기 공통
    window.closeModal = function () {
        const $modal = $("#global_modal");
        $modal.addClass("hidden");
        $modal.find("[data-modal-title]").empty();
        $modal.find("[data-modal-body]").empty();
    };

    $(document).on("click", "[data-modal-open]", function () {
        const title = $(this).data("modal-title") || "";
        const target = $(this).data("modal-target");
        const contentHtml = $(target).html() || "";

        window.openModal(title, contentHtml);
    });

    $(document).on("click", "[data-modal-close]", window.closeModal);

    $(document).on("click", "#global_modal", function (e) {
        if (e.target === this) window.closeModal();
    });
})();
